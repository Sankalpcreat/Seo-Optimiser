import React from 'react';

interface ResultData {
  label: string;
  score: number;
}

interface ResultsDisplayProps {
  results: ResultData[];
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Results</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <p>
              <strong>{result.label}:</strong> {result.score.toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsDisplay;
