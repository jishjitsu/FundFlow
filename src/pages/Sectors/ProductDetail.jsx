import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import sectors from './sectorsData'; // Make sure this points to your sectors data file

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Find the product by ID across all sectors
  const product = sectors.flatMap(sector => sector.products).find(p => p.id === parseInt(productId));

  if (!product) {
    return <p className="text-white">Product not found</p>;
  }

  // Calculate the fundraising progress
  const fundsGenerated = parseInt(product.fundsGenerated.replace(/[$,]/g, ''));
  const minimumInvestment = parseInt(product.minimumInvestment.replace(/[$,]/g, ''));
  const progressPercentage = Math.min((fundsGenerated / minimumInvestment) * 100, 100);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-500 hover:underline">
        &larr; Back to Sector
      </button>

      <div className="flex items-center space-x-6">
        <img src={product.image} alt={product.name} className="w-1/3 h-64 object-cover rounded-lg" />
        <div>
          <h1 className="text-4xl font-bold text-white">{product.name}</h1>
          <p className="text-gray-400 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-4">{product.price}</p>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1 text-gray-400">
              <span>Funds Generated: {product.fundsGenerated}</span>
              <span>Goal: {product.minimumInvestment}</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Overview */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Product Overview</h2>
        <p className="text-gray-400">
          {product.description} This investment opportunity offers excellent returns and impactful benefits.
        </p>
      </section>

      {/* Testimonials */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Testimonials</h2>
        <div className="space-y-4">
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300">
            "An incredible opportunity! It has positively impacted my community." – Investor A
          </blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300">
            "I’m proud to be a part of this initiative. Highly recommended!" – Investor B
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Contact</h2>
        <p className="text-gray-400">For more information, please reach out to our investment support team at <a href="mailto:support@investment.com" className="text-blue-500 hover:underline">support@investment.com</a>.</p>
      </section>
    </div>
  );
};

export default ProductDetails;
