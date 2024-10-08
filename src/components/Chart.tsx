// /src/components/Chart.tsx

import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
interface ChartProps {
    data: {
      labels: string[];
      datasets: Array<{
        label: string;
        data: number[];
        backgroundColor: string;
      }>;
    };
  }
  
const Chart: React.FC<ChartProps> = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
     
    }
  }, [data]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'SEO Analysis Chart',
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default Chart;
