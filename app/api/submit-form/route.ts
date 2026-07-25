import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { formId, values } = await request.json();
    
    if (!formId) {
      return NextResponse.json({ error: "formId is required" }, { status: 400 });
    }

    const payload = {
      input_values: values
    };

    const username = process.env.GF_CONSUMER_KEY || '';
    const password = process.env.GF_CONSUMER_SECRET || '';
    
    if (!username || !password) {
      // Fallback/log warning if environment variables are not configured yet
      console.warn("Gravity Forms REST API keys are not configured. Submissions will fail.");
    }

    const authHeader = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
    const gfApiUrl = process.env.GF_API_URL || 'https://yourdomain.com/wp-json/gf/v2';
    const gfUrl = `${gfApiUrl}/forms/${formId}/submissions`;

    const response = await fetch(gfUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
