import { NextResponse } from 'next/server';
import { handleSEOAnalysis } from '../../../backend/controllers/seoController'; // Import from your backend logic

export async function POST(request: Request) {
  try {
    const { text } = await request.json();
    const result = await handleSEOAnalysis(text);
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
