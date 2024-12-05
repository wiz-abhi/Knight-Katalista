import React from 'react';
import { ProductCard } from '../shop/ProductCard';
import { bestSellingProducts } from '../../data/products';

export function BestSelling() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Best Selling Products</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {bestSellingProducts.map((product) => (
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