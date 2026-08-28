import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Allow unauthorized/self-signed SSL certificates when connecting to WordPress
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  try {
    const { formId, values, recaptchaToken } = await request.json();
    
    if (!formId) {
      return NextResponse.json({ error: "formId is required" }, { status: 400 });
    }

    // Google reCAPTCHA v3 verification
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (secretKey) {
      if (!recaptchaToken) {
        return NextResponse.json({ error: "reCAPTCHA verification token is missing" }, { status: 400 });
      }

      try {
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
        const verifyRes = await fetch(verifyUrl, { method: "POST" });
        const verifyData = await verifyRes.json();

        if (!verifyData.success || verifyData.score < 0.5) {
          console.warn("reCAPTCHA verification failed:", verifyData);
          return NextResponse.json({ 
            error: "Security verification failed. Please try again.",
            details: "Low score or invalid token."
          }, { status: 400 });
        }
      } catch (err: any) {
        console.error("reCAPTCHA validation error:", err);
        return NextResponse.json({ error: "Failed to verify security token." }, { status: 500 });
      }
    } else {
      console.warn("reCAPTCHA Secret Key not configured. Skipping validation.");
    }

    const formattedValues: Record<string, any> = {};
    Object.keys(values).forEach(key => {
      const cleanKey = key.replace(/^input_/, '');
      // Gravity Forms REST API submissions endpoint requires keys in input_x format
      formattedValues[`input_${cleanKey}`] = values[key];
    });

    const username = process.env.GF_CONSUMER_KEY || process.env.WP_CONSUMER_KEY || process.env.WP_GF_CONSUMER_KEY || '';
    const password = process.env.GF_CONSUMER_SECRET || process.env.WP_CONSUMER_SECRET || process.env.WP_GF_CONSUMER_SECRET || '';
    const gfApiUrl = process.env.GF_API_URL || process.env.WP_API_URL || 'https://cms.thespeakersfirm.co.za/wp-json/gf/v2';

    if (!username || !password) {
      console.error("Gravity Forms REST API credentials are missing from environment variables.");
      return NextResponse.json({ 
        error: "Server Configuration Error: Missing Gravity Forms API keys (GF_CONSUMER_KEY / GF_CONSUMER_SECRET) in environment variables. Please configure these in your local environment or Vercel dashboard." 
      }, { status: 500 });
    }

    const authHeader = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
    const separator = gfApiUrl.includes('?') ? '&' : '?';
    const gfUrl = `${gfApiUrl}/forms/${formId}/submissions${separator}consumer_key=${username}&consumer_secret=${password}`;

    console.log("Submitting to Gravity Forms. Endpoint:", gfUrl, "Payload:", JSON.stringify(formattedValues));

    const response = await fetch(gfUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
        'User-Agent': 'Vercel-Serverless-Proxy'
      },
      body: JSON.stringify(formattedValues)
    });

    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const data = await response.json();
      
      // If Gravity Forms returns validation failures, normalize them for the client
      if (response.status === 400 && data.validation_messages) {
        return NextResponse.json({
          error: "Validation failed",
          validation_messages: data.validation_messages
        }, { status: 400 });
      }
      
      // If it's a general REST error containing a message
      if (!response.ok && data.message) {
        return NextResponse.json({
          error: data.message,
          validation_messages: data.validation_messages || {}
        }, { status: response.status });
      }
      
      return NextResponse.json(data, { status: response.status });
    } else {
      const text = await response.text();
      console.error("WordPress did not return JSON. Status:", response.status, "Response:", text.substring(0, 500));
      return NextResponse.json({ error: "WordPress returned non-JSON payload", details: text.substring(0, 300) }, { status: response.status === 200 ? 500 : response.status });
    }
  } catch (error: any) {
    console.error("Error in submit-form API Route:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
