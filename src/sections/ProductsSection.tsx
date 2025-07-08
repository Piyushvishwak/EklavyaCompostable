import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import grocery from '../assets/images/grocery.jpeg';
import garbage from '../assets/images/garbage.jpeg';
import pouch from '../assets/images/2Dpouch.jpeg';
import biohazard from '../assets/images/biohazard.jpeg';
import hospital from '../assets/images/hospital.jpeg';


const products = [
  {
    image: grocery,
    title: 'Grocery & Carry Bags',
    description: 'Eco-friendly shopping bags perfect for retail and daily use.',
    features: [
      'Multiple sizes for different shopping needs',
      'Strong handles for comfortable carrying',
      'Completely compostable within 180 days',
      'Food-safe and non-toxic'
    ]
  },
  {
    image: garbage,
    title: 'Garbage Bags',
    description: 'Sustainable waste management solutions for homes and businesses.',
    features: [
      'Available in various sizes and capacities',
      'Leak-resistant design',
      'Tear-resistant construction',
      'Perfect for organic waste disposal'
    ]
  },
  {
    image: pouch,
    title: '2D Pouches',
    description: 'Versatile non-plastic solutions for various products.',
    features: [
      'Custom sizes available',
      'Heat-sealable',
      'Excellent barrier properties',
      'Printable surface for branding'
    ]
  },
  {
    image: biohazard,
    title: 'Bio-hazard Bags',
    description: 'Safe disposal solutions for medical and hazardous waste.',
    features: [
      'Meets medical safety standards',
      'High puncture resistance',
      'Clearly marked for proper identification',
      'Various sizes for different needs'
    ]
  },
  {
    image: hospital,
    title: 'Hospital Bedsheet Covers',
    description: 'Hygienic and eco-friendly bedding protection.',
    features: [
      'Waterproof and leak-proof',
      'Easy to use and dispose',
      'Suitable for medical environments',
      'Available in standard hospital sizes'
    ]
  }
];

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Our Products"
          subtitle="Complete range of compostable non-plastic solutions for every need"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              features={product.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
