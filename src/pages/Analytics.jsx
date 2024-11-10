import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const InvestmentDashboard = () => {
  // Modified data for equity growth over time
  const equityData = [
    { date: '2023-Q1', 'DeepMind Aurora': 100000, 'Waymo Drive': 150000, 'Intuitive Surgical': 120000, 'Teladoc Health': 90000, 'Sundance Lab': 80000 },
    { date: '2023-Q2', 'DeepMind Aurora': 120000, 'Waymo Drive': 135000, 'Intuitive Surgical': 140000, 'Teladoc Health': 85000, 'Sundance Lab': 68000 },
    { date: '2023-Q3', 'DeepMind Aurora': 115000, 'Waymo Drive': 180000, 'Intuitive Surgical': 155000, 'Teladoc Health': 87000, 'Sundance Lab': 70000 },
    { date: '2023-Q4', 'DeepMind Aurora': 155000, 'Waymo Drive': 200000, 'Intuitive Surgical': 170000, 'Teladoc Health': 72000, 'Sundance Lab': 65000 }
  ];

  // Investment performance data
  const investmentData = [
    {
      company: 'DeepMind Aurora',
      sector: 'Technology',
      initialInvestment: 10000,
      currentValue: 15500,
      growth: 5500,
      growthPercentage: 55
    },
    {
      company: 'Waymo Drive',
      sector: 'Technology',
      initialInvestment: 1000,
      currentValue: 2000,
      growth: 1000,
      growthPercentage: 50
    },
    {
      company: 'Intuitive Surgical',
      sector: 'Healthcare',
      initialInvestment: 1275,
      currentValue: 900,
      growth: -375,
      growthPercentage: -30
    },
    {
      company: 'Teladoc Health',
      sector: 'Healthcare',
      initialInvestment: 9000,
      currentValue: 7200,
      growth: -1800,
      growthPercentage: -20
    },
    {
      company: 'Sundance Lab',
      sector: 'Film',
      initialInvestment: 8000,
      currentValue: 6500,
      growth: -1500,
      growthPercentage: -18.75
    }
  ];

  // Calculate total portfolio value for pie chart
  const portfolioSummary = investmentData.map(item => ({
    name: item.company,
    value: item.currentValue
  }));

  const COLORS = ['#00C49F', '#0088FE', '#FFBB28', '#FF8042', '#8884D8'];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  const calculateTotalValue = () => {
    return investmentData.reduce((acc, curr) => acc + curr.currentValue, 0);
  };

  const calculateTotalGrowth = () => {
    return investmentData.reduce((acc, curr) => acc + curr.growth, 0);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Total Portfolio Value</h3>
          <p className="text-2xl font-bold">{formatCurrency(calculateTotalValue())}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Total Growth</h3>
          <p className={`text-2xl font-bold ${calculateTotalGrowth() >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {calculateTotalGrowth() >= 0 ? '+' : ''}{formatCurrency(calculateTotalGrowth())}
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Portfolio Companies</h3>
          <p className="text-2xl font-bold">{investmentData.length}</p>
        </div>
      </div>

      {/* Equity Growth Chart */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-bold mb-6">Investment Growth Trends</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={equityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              {Object.keys(equityData[0])
                .filter(key => key !== 'date')
                .map((key, index) => (
                  <Line 
                    key={key}
                    type="monotone" 
                    dataKey={key} 
                    stroke={COLORS[index]} 
                    strokeWidth={2}
                  />
                ))
              }
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Investment Performance Table */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-bold mb-6">Investment Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left p-4">Company</th>
                <th className="text-left p-4">Sector</th>
                <th className="text-right p-4">Initial Investment</th>
                <th className="text-right p-4">Current Value</th>
                <th className="text-right p-4">Growth</th>
                <th className="text-right p-4">Growth %</th>
              </tr>
            </thead>
            <tbody>
              {investmentData.map((investment) => (
                <tr key={investment.company} className="border-b border-gray-700">
                  <td className="p-4">{investment.company}</td>
                  <td className="p-4">{investment.sector}</td>
                  <td className="text-right p-4">{formatCurrency(investment.initialInvestment)}</td>
                  <td className="text-right p-4">{formatCurrency(investment.currentValue)}</td>
                  <td className={`text-right p-4 ${investment.growth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {investment.growth >= 0 ? '+' : ''}{formatCurrency(investment.growth)}
                  </td>
                  <td className={`text-right p-4 ${investment.growthPercentage >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {investment.growthPercentage >= 0 ? '+' : ''}{investment.growthPercentage.toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Portfolio Distribution */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-6">Portfolio Distribution</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={portfolioSummary}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {portfolioSummary.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
                formatter={(value) => formatCurrency(value)}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDashboard;