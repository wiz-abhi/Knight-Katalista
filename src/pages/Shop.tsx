import React, { useState } from 'react';
import { ProductCard } from '../components/shop/ProductCard';
import { ProductModal } from '../components/shop/ProductModal';
import { Footer } from '../components/layout/Footer';
import { bestSellingProducts, newArrivalsProducts } from '../data/products';
import { Product } from '../types';

const allProducts = [...bestSellingProducts, ...newArrivalsProducts];

export function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-serif font-bold mb-12">Our Collection</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {allProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={setSelectedProduct}
            />
          ))}
        </div>

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </main>
      <Footer />
    </>
  );
}