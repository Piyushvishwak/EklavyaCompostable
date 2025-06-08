import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Ready to make the switch to sustainable packaging? Contact us today."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" variant="primary" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact information */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-4 bg-emerald-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h3>
                  <p className="text-gray-600">eklavyaenterprises0@gmail.com</p>
                  
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-emerald-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">Mon-Fri, 9am-5pm EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-emerald-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Visit Us</h3>
                  <p className="text-gray-600">Gurudwara Road, Jwalapur</p>
                  <p className="text-gray-600">Haridwar, Uttarakhand</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-emerald-50 rounded-lg">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Request a Sample Pack</h3>
                <p className="text-gray-700 mb-4">
                  Want to see and feel our compostable bags before placing an order? 
                  Request a free sample pack to experience the quality firsthand.
                </p>
                <Button variant="secondary">Request Samples</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;