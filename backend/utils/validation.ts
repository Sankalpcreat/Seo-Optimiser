\
export const validateTextInput = (text: string): boolean => {
    if (typeof text !== 'string' || text.trim().length < 5) {
      throw new Error('Text must be at least 5 characters long');
    }
    return true;
  };
  
  export const validateUserSignup = (userData: { username: string; email: string; password: string }): boolean => {
    const { username, email, password } = userData;
  
    if (!username || username.trim().length < 3) {
      throw new Error('Username must be at least 3 characters long');
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
    if (!emailPattern.test(email)) {
      throw new Error('Invalid email format');
    }
  
    if (!password || password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }
  
    return true;
  };
  
  export const validateSEORequest = (seoData: { text: string; language?: string }): boolean => {
    const { text, language } = seoData;
  
    if (typeof text !== 'string' || text.trim().length < 5) {
      throw new Error('Text must be at least 5 characters long');
    }
  
    const supportedLanguages = ['en', 'es', 'fr'];
    if (language && !supportedLanguages.includes(language)) {
      throw new Error(`Invalid language. Supported languages: ${supportedLanguages.join(', ')}`);
    }
  
    return true;
  };
  