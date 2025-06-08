import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../components/SectionTitle';

const steps = [
  {
    number: '01',
    title: 'Plant-Based Materials',
    description: 'Our bags start with sustainable, renewable resources like corn starch, vegetable oils, and compostable polymers.',
    image: 'https://images.pexels.com/photos/1459331/pexels-photo-1459331.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    number: '02',
    title: 'Eco-Friendly Production',
    description: 'Using low-impact manufacturing processes, we transform raw materials into high-quality compostable films.',
    image: 'https://images.pexels.com/photos/3683108/pexels-photo-3683108.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    number: '03',
    title: 'Commercial Use',
    description: 'Our bags provide the same functionality as conventional plastic while being completely eco-friendly.',
    image: 'https://images.pexels.com/photos/6969815/pexels-photo-6969815.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    number: '04',
    title: 'Industrial Composting',
    description: 'After use, bags are collected and sent to industrial composting facilities where they break down in 90-180 days.',
    image: 'https://images.pexels.com/photos/6985193/pexels-photo-6985193.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    number: '05',
    title: 'Return to Nature',
    description: 'The bags decompose completely into carbon dioxide, water, and biomass, returning valuable nutrients to the soil.',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
];

const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="py-24 bg-emerald-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="How It Works"
          subtitle="From plant to product to compost: our circular lifecycle"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image display */}
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl order-2 lg:order-1">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === activeStep ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Timeline steps */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex cursor-pointer transition-all duration-300 p-4 rounded-lg ${
                    index === activeStep ? 'bg-emerald-100' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    index === activeStep ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${index === activeStep ? 'text-emerald-800' : 'text-gray-800'}`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;