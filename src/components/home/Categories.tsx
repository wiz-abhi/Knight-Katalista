import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Bed Sheets',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6',
    description: 'Luxurious comfort for your perfect sleep'
  },
  {
    id: 2,
    name: 'Pillows',
    image: 'https://images.unsplash.com/photo-1584100936771-dad84524fef7',
    description: 'Support and softness for peaceful nights'
  },
  {
    id: 3,
    name: 'Duvets',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
    description: 'Warmth and style combined perfectly'
  }
];

export function Categories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Categories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/shop?category=${category.name.toLowerCase()}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-medium mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}