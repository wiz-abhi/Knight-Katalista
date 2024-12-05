import React from 'react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  return (
    <div 
      className="group cursor-pointer"
      onClick={() => onOpenDetails(product)}
    >
      <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-medium mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-xl font-semibold">${product.price}</p>
    </div>
  );
}