import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-emerald-400" />
              <span className="ml-2 text-xl font-bold">Eklavya Compostables</span>
            </div>
            <p className="text-gray-400 mb-4">
              Sustainable non-plastic solutions for a greener future. Our compostable bags are the eco-friendly alternative to traditional plastic.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-gray-400 hover:text-emerald-400 transition-colors">Products</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-emerald-400 transition-colors">Benefits</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-emerald-400 transition-colors">How It Works</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-emerald-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Sustainability Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Composting 101</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Material Safety Data</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Certifications</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest product updates and sustainability tips.
            </p>
            <form className="max-w-md w-full mx-auto flex flex-col sm:flex-row">
            <input type="email" placeholder="Your email"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-t-md sm:rounded-l-md sm:rounded-tr-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 w-full sm:w-auto rounded-b-md sm:rounded-r-md sm:rounded-bl-none transition-colors"
            >
              Subscribe
            </button>
          </form>

          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Eklavya Compostables. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">Sustainability Pledge</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
