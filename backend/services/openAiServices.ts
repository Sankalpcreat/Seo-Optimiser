import axios from 'axios';

const API_KEY = process.env.OPENAI_API_KEY;

export const optimizeContent = async (text: string) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4-turbo', 
        messages: [
          {
            role: 'user',
            content: text,  
          },
        ],
        max_tokens: 500, 
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,  
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error in OpenAI API:', error);
    throw error;
  }
};
