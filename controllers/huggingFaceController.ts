import { NextRequest, NextResponse } from 'next/server';
import { handleHuggingFaceAnalysis } from '../services/huggingFaceService';

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();
    const result = await handleHuggingFaceAnalysis(text);
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
