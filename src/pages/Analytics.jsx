import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'flowbite-react';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const Analytics = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Investments Over Time',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-semibold mb-4">Analytics</h1>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <h2 className="text-xl font-medium">Total Investments</h2>
          <p className="text-3xl">1,500</p>
        </Card>
        <Card>
          <h2 className="text-xl font-medium">New Investments</h2>
          <p className="text-3xl">300</p>
        </Card>
      </div>
      <div>
        <h2 className="text-xl font-medium mb-4">Investment Trends</h2>
        <Line data={data} />
      </div>
    </div>
  );
};

export default Analytics;
