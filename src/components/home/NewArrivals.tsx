import React from 'react';
import { ProductCard } from '../shop/ProductCard';
import { newArrivalsProducts } from '../../data/products';

export function NewArrivals() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">New Arrivals</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {newArrivalsProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={() => {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}