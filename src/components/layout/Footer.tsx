import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6">Knight Katalista</h3>
            <p className="text-gray-600 mb-4">
              Premium bedding for the perfect night's sleep
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="text-gray-600 hover:text-gray-900">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/collections" className="text-gray-600 hover:text-gray-900">All Products</Link></li>
              <li><Link to="/collections?category=sheets" className="text-gray-600 hover:text-gray-900">Bed Sheets</Link></li>
              <li><Link to="/collections?category=pillows" className="text-gray-600 hover:text-gray-900">Pillows</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link to="/about#contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Shipping Info</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}