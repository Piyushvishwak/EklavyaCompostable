import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import NavLink from './NavLink';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-3xl font-bold text-white">Eklavya Compostable</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#benefits">Benefits</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <NavLink href="#products" onClick={() => setIsOpen(false)}>Products</NavLink>
            <NavLink href="#benefits" onClick={() => setIsOpen(false)}>Benefits</NavLink>
            <NavLink href="#how-it-works" onClick={() => setIsOpen(false)}>How It Works</NavLink>
            <NavLink href="#faq" onClick={() => setIsOpen(false)}>FAQ</NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
