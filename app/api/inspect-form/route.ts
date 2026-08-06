import { NextResponse } from 'next/server';

export async function GET() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  try {
    const username = process.env.GF_CONSUMER_KEY || '';
    const password = process.env.GF_CONSUMER_SECRET || '';
    const authHeader = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
    const gfApiUrl = process.env.GF_API_URL || 'https://yourdomain.com/wp-json/gf/v2';
    
    const response = await fetch(`${gfApiUrl}/forms/1`, {
      headers: {
        'Authorization': authHeader,
      }
    });
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
