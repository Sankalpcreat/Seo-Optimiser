import axios from 'axios';

// Function to send a POST request to the seoAnalysis API route
export const analyzeContent = async (text: string) => {
  try {
    const response = await axios.post('/api/seoAnalysis', { text });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Server responded with a status code outside the 2xx range
        console.error('Server Error:', error.response.data);
        throw new Error(`Failed to analyze content: ${error.response.data.error || error.message}`);
      } else if (error.request) {
        // Request was made but no response was received
        console.error('No Response from Server:', error.request);
        throw new Error('No response from server. Please try again.');
      }
    } else if (error instanceof Error) {
      // Handle other types of errors (non-Axios)
      console.error('Unexpected Error:', error.message);
      throw new Error(`Unexpected error: ${error.message}`);
    } else {
      // Fallback for unknown error types
      throw new Error('An unknown error occurred.');
    }
  }
};
