import axios from 'axios';

const API_KEY = process.env.OPENAI_API_KEY;

if (!API_KEY) {
  throw new Error('Missing OpenAI API key. Please set the OPENAI_API_KEY environment variable.');
}

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
  } catch (error: any) {
   
    if (error.response) {
      console.error('OpenAI API Error Response:', error.response.data);
    } else {
      console.error('OpenAI API Request Failed:', error.message);
    }

    // Throw a more descriptive error for the calling function
    throw new Error(`OpenAI API Error: ${error.response?.data?.error?.message || error.message}`);
  }
};
