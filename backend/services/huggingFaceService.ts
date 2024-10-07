import axios from 'axios';

const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/';
const MODEL_NAME = 'distilbert-base-uncased-finetuned-sst-2-english';  
const API_KEY = process.env.HUGGING_FACE_API_KEY;

export const analyzeText = async (text: string) => {
  try {
    const response = await axios.post(
      `${HUGGING_FACE_API_URL}${MODEL_NAME}`,
      { inputs: text },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`, 
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error in Hugging Face API:', error);
    throw error;
  }
};
