import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
          className="w-full h-full object-cover"
          alt="Luxury bedroom"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-serif font-bold mb-6">
            Crafting Perfect Sleep Through Premium Bedding
          </h1>
          <p className="text-xl mb-8">
            Experience the luxury of high-quality bedding, manufactured with precision and care for perfect night's sleep
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-gray-100 transition-colors">
            <span>Explore Collection</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}