import React from 'react';

interface ResultData {
    label: string;
    score: number;
  }
  
  interface ResultsDisplayProps {
    results: ResultData[];
  }

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
    if(!results){
        return <p>No result to display</p>
    }

    return (
        <div className="w-full max-w-4xl mx-auto p-4 bg-gray-100 border border-gray-300 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">SEO Analysis Results</h2>
      <pre className="text-sm text-gray-700 bg-white p-4 rounded-lg">{JSON.stringify(results, null, 2)}</pre>
    </div>
  );


}
export default ResultsDisplay;