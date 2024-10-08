import { NextResponse } from 'next/server';
import { handleSEOAnalysis } from '../../../../controllers/seoController'; // Updated path for controllers

export async function POST(request: Request) {
  try {
    const { text } = await request.json();
    const result = await handleSEOAnalysis(text);
    return NextResponse.json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Unknown error occurred' }, { status: 500 });
  }
}
