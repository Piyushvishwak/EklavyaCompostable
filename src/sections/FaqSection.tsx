import React from 'react';
import SectionTitle from '../components/SectionTitle';
import FaqItem from '../components/FaqItem';

const faqs = [
  {
    question: "What makes your polybags compostable?",
    answer: "Our polybags are made from plant-based materials like cornstarch, vegetable oils, and compostable polymers that break down completely in industrial composting facilities. They meet international standards for compostability including EN13432 and ASTM D6400."
  },
  {
    question: "How long do the bags take to decompose?",
    answer: "In industrial composting conditions, our bags decompose within 90-180 days, depending on the specific composting conditions. In home composting, it may take longer, typically 6-12 months."
  },
  {
    question: "Are your compostable bags as strong as regular plastic bags?",
    answer: "Yes, our compostable bags are designed to have comparable strength and functionality to traditional plastic bags. They can handle the same loads and provide similar protection for your products."
  },
  {
    question: "Can I print custom branding on these bags?",
    answer: "Absolutely! We offer custom printing options for all our compostable polybag products. You can add your logo, designs, and messaging using eco-friendly inks that don't compromise the compostability of the bags."
  },
  {
    question: "What sizes and thicknesses are available?",
    answer: "We offer a wide range of sizes from small retail bags to large shipping mailers. Thicknesses range from 0.6 mil to 3.0 mil depending on your specific needs. We can also create custom sizes for large orders."
  },
  {
    question: "Are these bags more expensive than traditional plastic bags?",
    answer: "While compostable bags typically cost more than conventional plastic bags, the price gap is narrowing as production scales up. Many businesses find the premium is offset by improved brand perception and customer loyalty. We offer competitive pricing and volume discounts."
  }
];

const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our compostable packaging solutions"
        />
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;