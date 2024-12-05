import React, { useState } from 'react';
import { Footer } from '../components/layout/Footer';

export function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-serif font-bold mb-8">About Us</h1>
          
          <div className="prose prose-lg mb-16">
            <p className="mb-6">
              At Knight Katalista, we believe that quality sleep is the foundation of a healthy and fulfilling life. Our journey began with a simple mission: to create premium bedding that transforms your bedroom into a sanctuary of comfort and style.
            </p>
            
            <p className="mb-6">
              Each piece in our collection is carefully crafted using the finest materials and time-tested techniques. We work directly with skilled artisans and ethical manufacturers to ensure that every product meets our exacting standards for quality and sustainability.
            </p>
            
            <p>
              Our commitment to excellence extends beyond our products to include exceptional customer service and a seamless shopping experience. We're here to help you create the perfect sleep environment for your needs.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}