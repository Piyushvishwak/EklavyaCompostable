import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ProductsSection from './sections/ProductsSection';
import BenefitsSection from './sections/BenefitsSection';
import HowItWorksSection from './sections/HowItWorksSection';
import FaqSection from './sections/FaqSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'Eklavya Compostables | Compostable Polybags';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <BenefitsSection />
        <HowItWorksSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App