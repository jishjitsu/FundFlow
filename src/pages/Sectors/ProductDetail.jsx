import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, BarChart2, CheckCircle } from 'lucide-react';
import sectorData from './sectorsData';
import predictionsData from './predictions.json';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [currentFunds, setCurrentFunds] = useState(0); // Initialize with 0 instead of null
  const [showSuccess, setShowSuccess] = useState(false);
  const [product, setProduct] = useState(null);
  
  // Use useEffect to fetch and set initial data
  useEffect(() => {
    const foundProduct = sectorData.flatMap(sector => sector.products)
      .find(p => p.id === parseInt(productId));
    
    if (foundProduct) {
      setProduct(foundProduct);
      const initialFunds = parseInt(foundProduct.fundsGenerated.replace(/[₹,]/g, '')) || 0;
      setCurrentFunds(initialFunds);
    }
  }, [productId]);

  // If product is not loaded yet, show loading state
  if (!product) {
    return <div className="min-h-screen bg-gray-900 text-white p-8">Loading...</div>;
  }

  const predictionInfo = predictionsData.find(p => 
    p.company_name.toLowerCase() === product.name.toLowerCase()
  );

  const historicalData = product.historicSales?.map(sale => ({
    month: sale.month,
    sales: parseInt(sale.revenue.replace(/[₹,]/g, ''))
  }));

  const minimumInvestment = parseInt(product.minimumInvestment.replace(/[₹,]/g, '')) || 0;
  const progressPercentage = Math.min((currentFunds / minimumInvestment) * 100, 100);

  const handleInvestmentChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setInvestmentAmount(value);
  };

const handleBuy = () => {
  const amount = parseInt(investmentAmount);
  const productPrice = parseInt(product.price.replace(/[₹,]/g, '')) || 0; // Parse product price
  
  if (amount && amount >= productPrice) { // Check if amount meets or exceeds product price
    setCurrentFunds(prev => prev + amount);
    setInvestmentAmount('');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  } else {
    alert(`Investment amount should be at least ₹${productPrice.toLocaleString()}`);
  }
};


  return (
    <div className="min-h-screen bg-black text-white p-8">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-4 text-emerald-500 hover:text-emerald-400 transition-colors"
      >
        &larr; Back to Sector
      </button>
      
      <div className="grid md:grid-cols-1 gap-8">
        <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
          <h1 className="text-4xl font-bold text-white">{product.name}</h1>
          <p className="text-gray-300 text-lg">{product.description}</p>
          <p className="text-3xl font-semibold text-emerald-500">{product.price}</p>
          
          {/* Investment Input and Buy Button */}
          <div className="w-full max-w-md space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                value={investmentAmount}
                onChange={handleInvestmentChange}
                placeholder="Enter investment amount"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
              <button
                onClick={handleBuy}
                className={`px-6 py-2 rounded-lg ${
                  !investmentAmount || parseInt(investmentAmount) <= 0
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-emerald-500 hover:bg-emerald-600'
                } text-white transition-colors`}
                disabled={!investmentAmount || parseInt(investmentAmount) <= 0}
              >
                Buy
              </button>
            </div>
            
            {showSuccess && (
              <div className="bg-emerald-500/20 border border-emerald-500 text-emerald-500 p-4 rounded-lg">
                Investment successful! Thank you for your contribution.
              </div>
            )}
          </div>
          
          {/* Progress Bar */}
          <div className="space-y-2 w-full max-w-md">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Funds Generated: ₹{currentFunds.toLocaleString()}</span>
              <span>Goal: {product.minimumInvestment}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-emerald-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Historical Data Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-white">Sales History</h2>
        {historicalData && historicalData.length > 0 ? (
          <div className="bg-gray-800 p-4 rounded-xl h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={historicalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="month" 
                  stroke="#9CA3AF"
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  interval={2}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  tickFormatter={(value) => `₹${value.toLocaleString()}`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#fff'
                  }}
                  formatter={(value) => [`₹${value.toLocaleString()}`, 'Sales']}
                />
                <Line 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  dot={{ fill: '#10B981' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="bg-gray-800 p-8 rounded-xl text-center text-gray-300">
            No historical data available for this product
          </div>
        )}
      </section>

      {/* Predictions Section */}
      {predictionInfo && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-white">Performance Metrics & Predictions</h2>
          
          {/* Success Score */}
          <div className="bg-black p-6 rounded-xl mb-6 border border-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Success Score</h3>
              <div className="text-3xl font-bold text-emerald-500">
                {predictionInfo.success_score.toFixed(1)}%
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Growth Card */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-emerald-500 mr-2" />
                <h4 className="text-lg font-semibold">Growth Metrics</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Growth</span>
                  <span className="text-emerald-500">
                    {predictionInfo.metrics.total_growth_percent.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Monthly Growth</span>
                  <span className="text-emerald-500">
                    {predictionInfo.metrics.avg_monthly_growth_percent.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Latest Revenue Card */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <BarChart2 className="w-6 h-6 text-emerald-500 mr-2" />
                <h4 className="text-lg font-semibold">Latest Revenue</h4>
              </div>
              <div className="text-2xl font-bold text-emerald-500">
                ₹{predictionInfo.metrics.latest_revenue.toLocaleString()}
              </div>
            </div>

            {/* Reliability Card */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-500 mr-2" />
                <h4 className="text-lg font-semibold">Trend Reliability</h4>
              </div>
              <div className="text-2xl font-bold text-emerald-500">
                {predictionInfo.metrics.trend_reliability.toFixed(1)}%
              </div>
            </div>
          </div>

          {/* Future Predictions */}
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Revenue Predictions (Next 3 Months)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {predictionInfo.metrics.predicted_next_3_months.map((prediction, index) => (
                <div key={index} className="p-4 bg-gray-700 rounded-lg">
                  <div className="text-gray-400 mb-2">Month {index + 1}</div>
                  <div className="text-lg font-semibold text-emerald-500">
                    ₹{prediction.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Product Overview */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Product Overview</h2>
        <p className="text-gray-300">
          {product.description} This investment opportunity offers excellent returns and impactful benefits.
        </p>
      </section>

      {/* Testimonials */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-white">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <blockquote className="bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-300 italic">
              "An incredible opportunity! It has positively impacted my community."
            </p>
            <footer className="mt-4 text-emerald-500">– Investor A</footer>
          </blockquote>
          <blockquote className="bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-300 italic">
              "I'm proud to be a part of this initiative. Highly recommended!"
            </p>
            <footer className="mt-4 text-emerald-500">– Investor B</footer>
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Contact</h2>
        <p className="text-gray-300">
          For more information, please reach out to our investment support team at{' '}
          <a href="/pages/Message" className="text-emerald-500 hover:text-emerald-400 transition-colors">
            Chat with Us
          </a>
        </p>
      </section>
    </div>
  );
};

export default ProductDetails;