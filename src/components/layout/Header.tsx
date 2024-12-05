import React, { useState } from 'react';
import { ShoppingCart, Menu, LogOut } from 'lucide-react';

export function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // Simulated navigation function
  const navigate = (path) => {
    console.log(`Navigating to: ${path}`);
    // In a real app, this would use react-router or actual navigation
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="font-serif text-xl font-bold">
            KNIGHT KATALISTA
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="/collections" className="text-gray-700 hover:text-gray-900">
              Collections
            </a>
            <a href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <button
                onClick={() => {
                  handleLogout();
                  navigate('/');
                }}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <a
                  href="/login"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Signup
                </a>
              </div>
            )}
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}