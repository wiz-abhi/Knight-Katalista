import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    // In a real app, this would integrate with a payment processor
    alert('This is a demo store. No actual payment will be processed.');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-3xl font-bold mb-8">${product.price}</p>
            
            <div className="space-y-4">
              <button 
                onClick={handleBuyNow}
                className="w-full bg-gray-900 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-800"
              >
                <span>Buy Now</span>
              </button>
              <button className="w-full border-2 border-gray-900 text-gray-900 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50">
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}