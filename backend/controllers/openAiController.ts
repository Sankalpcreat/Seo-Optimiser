import { optimizeContent } from '../services/openAiServices';

export const handleOpenAIOptimization = async (text: string) => {
  try {
    const result = await optimizeContent(text);
    return result;
  } catch (error) {
    if (error instanceof Error) {
      // Check if error is an instance of Error to access the 'message' property
      throw new Error('Open ai optimization failed: ' + error.message);
    } else {
      // For non-error objects, return a generic error message
      throw new Error('Open ai optimization failed with an unknown error');
    }
  }
};
