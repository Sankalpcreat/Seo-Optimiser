import axios from 'axios';

const API_KEY = process.env.OPENAI_API_KEY;

if (!API_KEY) {
  throw new Error('Missing OpenAI API key. Please set the OPENAI_API_KEY environment variable.');
}

export const optimizeContent = async (text: string): Promise<any> => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4-turbo',
        messages: [{ role: 'user', content: text }],
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
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error('OpenAI API Error Response:', error.response.data);
        throw new Error(`OpenAI API Error: ${error.response.data.error?.message || error.message}`);
      } else if (error.request) {
        console.error('OpenAI API No Response:', error.request);
        throw new Error('No response received from OpenAI API.');
      }
    } else if (error instanceof Error) {
      console.error('Unexpected Error:', error.message);
      throw new Error(`Unexpected error: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred with OpenAI API.');
    }
  }
};
