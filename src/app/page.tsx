"use client";

import React, { useState } from "react";
import SEOForm from "@/components/SEOForm";
import ResultsDisplay from "../components/ResultDisplay";
import LoadingSpinner from "../components/LoadingSpinner";
import { analyzeContent } from "../utils/apiRequests";

interface ResultData {
  label: string;
  score: number;
}

const Homepage: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [results, setResults] = useState<ResultData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await analyzeContent(inputText);
      setResults(response);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message); // Log the error
        setError('Failed to analyze content. Please try again.');
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">SEO Content Analyzer</h1>
      <SEOForm inputText={inputText} setInputText={setInputText} onSubmit={handleAnalyze} />
      {loading && <LoadingSpinner />}
      {error && <p className="text-red-500">{error}</p>}
      {results && <ResultsDisplay results={results} />}
    </div>
  );
};

export default Homepage;
