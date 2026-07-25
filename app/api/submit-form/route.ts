import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { formId, values } = await request.json();
    
    if (!formId) {
      return NextResponse.json({ error: "formId is required" }, { status: 400 });
    }

    // Format input keys: Gravity Forms REST API expects direct keys like "1.3", "14", etc.
    const formattedValues: Record<string, any> = {};
    Object.keys(values).forEach(key => {
      const cleanKey = key.replace(/^input_/, '');
      // Only replace underscores with dots if it is a composite sub-field (e.g. "1_3" -> "1.3")
      // Do not convert simple integer IDs like "17" or "14"
      if (/^\d+_\d+$/.test(cleanKey)) {
        formattedValues[cleanKey.replace('_', '.')] = values[key];
      } else {
        formattedValues[cleanKey] = values[key];
      }
    });

    const payload = {
      input_values: formattedValues
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

    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const data = await response.json();
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
