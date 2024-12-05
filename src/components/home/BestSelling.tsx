import React, { useState } from 'react';
import { ProductCard } from '../shop/ProductCard';
import { bestSellingProducts } from '../../data/products';
import { Product } from '../../types';

export function BestSelling() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Best Selling Products
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {bestSellingProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>
      </div>

      {/* Modal for product details */}
      {selectedProduct && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    onClick={handleCloseDetails} // Handle click outside modal
  >
    {/* Modal content wrapper */}
    <div
      className="bg-white p-6 rounded-lg modal-container relative"
      style={{
        width: '500px', // Fixed width
        height: '600px', // Fixed height
      }}
      onClick={(e) => e.stopPropagation()} // Prevent click events from bubbling up
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        {selectedProduct.name}
      </h2>
      <div
        className="relative overflow-hidden rounded-lg modal-image-container mb-4"
        style={{
          width: '100%',
          height: '300px', // Fixed height for the image container
        }}
      >
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-gray-600 mb-4 text-justify">
        {selectedProduct.description}
      </p>
      <p className="text-xl font-semibold text-center">
        ${selectedProduct.price}
      </p>
      {/* Buttons */}
      <div className="mt-4 flex justify-between">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-1/2 mr-2"
          onClick={() => alert('Buying the product!')}
        >
          Buy Now
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-1/2"
          onClick={() => alert('Added to cart!')}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
)}



    </section>
  );
}
