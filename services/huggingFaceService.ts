import axios from 'axios';

const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/';
const MODEL_NAME = 'distilbert-base-uncased-finetuned-sst-2-english';

console.log('Hugging Face API Key:', process.env.HUGGING_FACE_API_KEY);

const API_KEY = process.env.HUGGING_FACE_API_KEY;

if (!API_KEY) {
  throw new Error('Missing Hugging Face API Key. Please set the HUGGING_FACE_API_KEY environment variable.');
}

interface HuggingFaceResponse {
  label: string;
  score: number;
}

export const analyzeText = async (text: string): Promise<HuggingFaceResponse[]> => {
  try {
    const response = await axios.post(
      `${HUGGING_FACE_API_URL}${MODEL_NAME}`,
      { inputs: text },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.data) {
      console.log('Hugging Face API result:', response.data);
      return response.data as HuggingFaceResponse[];
    } else {
      throw new Error('No response data from Hugging Face API.');
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Hugging Face API Error (Axios):', error.response?.data?.error);
      throw new Error(`Hugging Face API Error: ${error.response?.data?.error || error.message}`);
    } else if (error instanceof Error) {
      console.error('Hugging Face API Error:', error.message);
      throw new Error(`Hugging Face API Error: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred with Hugging Face API');
    }
  }
};
