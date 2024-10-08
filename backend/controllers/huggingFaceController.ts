import { analyzeText } from '../services/huggingFaceService';
import { cacheResult, getCachedResult } from '../services/cacheServices';

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
    if (error instanceof Error) {
      // TypeScript now knows that error is an Error object and has a 'message' property
      throw new Error('Hugging Face analysis failed: ' + error.message);
    } else {
      // For non-error objects, return a general error message
      throw new Error('Hugging Face analysis failed with an unknown error');
    }
  }
};