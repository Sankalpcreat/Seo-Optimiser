import React from 'react';

interface SEOFormProps {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

const SEOForm: React.FC<SEOFormProps> = ({ inputText, setInputText, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto py-6">
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="w-full p-4 border border-gray-300 rounded mb-4"
        rows={6}
        placeholder="Enter your content here..."
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Analyze Content
      </button>
    </form>
  );
};

export default SEOForm;
