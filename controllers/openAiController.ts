import { NextRequest, NextResponse } from 'next/server';
import { optimizeContent } from '../services/openAiServices';

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();
    const result = await optimizeContent(text);
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
