import React, { useEffect, useRef } from 'react';
import { Leaf, Recycle, Droplets, Award, ThumbsUp, Zap } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';

const benefits = [
  {
    icon: Leaf,
    title: '100% Compostable',
    description: 'Our bags break down completely in industrial composting facilities, returning to the earth as nutrient-rich soil.'
  },
  {
    icon: Recycle,
    title: 'Zero Microplastics',
    description: 'Unlike traditional plastics, our bags leave absolutely no microplastic residue when they decompose.'
  },
  {
    icon: Droplets,
    title: 'Reduced Carbon Footprint',
    description: 'Our manufacturing process produces 70% less carbon emissions compared to traditional plastic production.'
  },
  {
    icon: Award,
    title: 'Certified Sustainable',
    description: 'All our products are certified to international compostability standards, including EN13432 and ASTM D6400.'
  },
  {
    icon: ThumbsUp,
    title: 'Customer Approved',
    description: 'Join hundreds of businesses that have already made the switch to our eco-friendly non-plastic solutions.'
  },
  {
    icon: Zap,
    title: 'Comparable Performance',
    description: 'Our bags offer the same strength, clarity, durability, and overall functionality as traditional plastic bags.'
  }
];

const BenefitsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const cards = document.querySelectorAll('.benefit-card');
    cards.forEach(card => observer.observe(card));
    
    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="benefits" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Benefits of Compostable Bags"
          subtitle="Make a positive environmental impact without sacrificing quality or performance"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card opacity-0 transition-all duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <FeatureCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
