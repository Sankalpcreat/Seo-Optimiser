import { analyzeText } from '../services/huggingFaceService';
import { cacheResult, getCachedResult } from '../services/cacheService';

export const handleHuggingFaceAnalysis = async (text: string) => {
  try {
  
    const cachedResult = await getCachedResult(text);
    if (cachedResult) {
      return JSON.parse(cachedResult); 
    }

 
    const result = await analyzeText(text);


    await cacheResult(text, JSON.stringify(result));

    return result;
  } catch (error) {
    throw new Error('Hugging Face analysis failed: ' + error.message);
  }
};
