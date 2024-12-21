import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Footer } from '../components/layout/Footer';

export function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
          <p className="text-gray-600 mb-8">
            Your order has been successfully placed. We'll send you an email with your order details.
          </p>
          
          <button
            onClick={() => navigate('/')}
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            Continue Shopping
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}