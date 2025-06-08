import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, features }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="h-48 md:h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-1.5 mr-2"></span>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;