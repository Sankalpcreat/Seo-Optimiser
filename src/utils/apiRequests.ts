import axios from 'axios';

// Function to send a POST request to the seoAnalysis API route
export const analyzeContent = async (text: string) => {
    try {
      const response = await axios.post('/api/seoAnalysis', { text });  // Adjusted to use relative path
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Server Error:', error.response.data);
          throw new Error(`Failed to analyze content: ${error.response.data.error || error.message}`);
        } else if (error.request) {
          console.error('No Response from Server:', error.request);
          throw new Error('No response from server. Please try again.');
        }
      } else if (error instanceof Error) {
        console.error('Unexpected Error:', error.message);
        throw new Error(`Unexpected error: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred.');
      }
    }
  };
