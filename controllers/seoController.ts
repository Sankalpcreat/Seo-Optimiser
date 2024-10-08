import { NextRequest, NextResponse } from 'next/server';
import { analyzeText } from '../services/huggingFaceService';
import { optimizeContent } from '../services/openAiServices';
import { cacheResult, getCachedResult } from '../services/cacheServices';
import Content from '../models/Content';

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    const cachedResult = await getCachedResult(text);
    if (cachedResult) {
      return NextResponse.json(JSON.parse(cachedResult));
    }

    const huggingFaceResult = await analyzeText(text);
    const openAIResult = await optimizeContent(text);

    await Content.create({
      text,
      analysisResult: { openAIResult, huggingFaceResult },
    });

    await cacheResult(text, JSON.stringify({ openAIResult, huggingFaceResult }));

    return NextResponse.json({ openAIResult, huggingFaceResult });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
