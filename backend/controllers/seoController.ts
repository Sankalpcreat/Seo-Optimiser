import  handleHuggingFaceAnalysis  from '../services/huggingFaceService';
import { optimizeContent } from '../services/openAiServices';
import { cacheResult, getCachedResult } from '../services/cacheServices';
import Content from '../models/Content';

export const handleSEOAnalysis = async (text: string) => {
  try {
    // Call Hugging Face API for sentiment/entity analysis
    const huggingFaceResult = await handleHuggingFaceAnalysis(text);
    console.log('Hugging Face API result:', huggingFaceResult);  // Log for confirmation
    
    // Call OpenAI API to optimize content
    const openAIResult = await optimizeContent(text);

    // Store the combined result in MongoDB
    await Content.create({ text, analysisResult: { openAIResult, huggingFaceResult } });

    // Cache the result
    await cacheResult(text, JSON.stringify({ openAIResult, huggingFaceResult }));

    return { openAIResult, huggingFaceResult };
  } catch (error: any) {
    throw new Error('SEO ANALYSIS FAILED: ' + error.message);
  }
};
