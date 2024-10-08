import  {analyzeText}  from '../services/huggingFaceService';
import { optimizeContent } from '../services/openAiServices';
import { cacheResult, getCachedResult } from '../services/cacheServices';
import Content from '../models/Content';

export const handleSEOAnalysis = async (text: string) => {
  try {

    const huggingFaceResult = await analyzeText(text);
    console.log('Hugging Face API result:', huggingFaceResult); 
    
   
    const openAIResult = await optimizeContent(text);

  
    await Content.create({ text, analysisResult: { openAIResult, huggingFaceResult } });


    await cacheResult(text, JSON.stringify({ openAIResult, huggingFaceResult }));

    return { openAIResult, huggingFaceResult };
  } catch (error: any) {
    throw new Error('SEO ANALYSIS FAILED: ' + error.message);
  }
};
