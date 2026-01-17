import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import postgres from "https://deno.land/x/postgresjs@v3.4.4/mod.js";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const databaseUrl = Deno.env.get('NEON_DATABASE_URL');
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!databaseUrl) {
      console.error('NEON_DATABASE_URL is not set');
      return new Response(
        JSON.stringify({ error: 'Database connection not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not set');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const sql = postgres(databaseUrl, { ssl: 'require' });
    const resend = new Resend(resendApiKey);

    if (req.method === 'POST') {
      const { name, email, subject, message } = await req.json();

      // Validate required fields
      if (!name || !email || !subject || !message) {
        return new Response(
          JSON.stringify({ error: 'All fields are required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      console.log('Inserting contact message to Neon:', { name, email, subject });

      // Create table if not exists
      await sql`
        CREATE TABLE IF NOT EXISTS contact_messages (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          subject TEXT NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        )
      `;

      // Insert the contact message
      const result = await sql`
        INSERT INTO contact_messages (name, email, subject, message)
        VALUES (${name}, ${email}, ${subject}, ${message})
        RETURNING id, created_at
      `;

      console.log('Message inserted successfully:', result[0]);

      await sql.end();

      // Send email notification to you (admin)
      console.log('Sending email notification...');
      
      const emailResponse = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["ahmadsodik0105@gmail.com"], // Your email
        subject: `[Portfolio] Pesan Baru: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6366f1;">📬 Pesan Baru dari Portfolio</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Nama:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Subjek:</strong> ${subject}</p>
              <hr style="border: 1px solid #e2e8f0; margin: 15px 0;">
              <p><strong>Pesan:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #64748b; font-size: 12px;">
              Pesan ini dikirim melalui form kontak di portfolio Anda.
            </p>
          </div>
        `,
      });

      console.log('Email sent successfully:', emailResponse);

      return new Response(
        JSON.stringify({ success: true, data: result[0], emailSent: true }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: unknown) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
