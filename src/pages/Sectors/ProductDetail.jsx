import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import sectorData from './sectorsData';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  const product = sectorData.flatMap(sector => sector.products)
    .find(p => p.id === parseInt(productId));

  if (!product) {
    return <div className="min-h-screen bg-gray-900 text-white p-8">Product not found</div>;
  }

  const historicalData = product.historicSales?.map(sale => ({
    month: sale.month,
    sales: parseInt(sale.revenue.replace(/[₹,]/g, ''))
  }));

  const fundsGenerated = parseInt(product.fundsGenerated.replace(/[₹,]/g, ''));
  const minimumInvestment = parseInt(product.minimumInvestment.replace(/[₹,]/g, ''));
  const progressPercentage = Math.min((fundsGenerated / minimumInvestment) * 100, 100);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-4 text-emerald-500 hover:text-emerald-400 transition-colors"
      >
        &larr; Back to Sector
      </button>
      
      <div className="grid md:grid-cols-2 gap-8">
        
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-white">{product.name}</h1>
          <p className="text-gray-300 text-lg">{product.description}</p>
          <p className="text-3xl font-semibold text-emerald-500">{product.price}</p>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Funds Generated: {product.fundsGenerated}</span>
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