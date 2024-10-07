import axios from 'axios';

const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/';
const MODEL_NAME = 'distilbert-base-uncased-finetuned-sst-2-english';  
const API_KEY = process.env.HUGGING_FACE_API_KEY;


export const handleHuggingFaceAnalysis = async (text: string) => {
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
    console.log('Hugging Face API result:', response.data);  
    return response.data;  
  } catch (error: any) {
    console.error('Hugging Face API Error:', error.message);
    throw new Error(`Hugging Face API Error: ${error.response?.data?.error || error.message}`);
  }
};
