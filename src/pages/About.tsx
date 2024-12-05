import React, { useState } from 'react';
import { Footer } from '../components/layout/Footer';

export function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-serif font-bold mb-8">Brand Story</h1>
          <div className="prose prose-lg mb-16">
          <h2 className="text-xl mb-1 font-serif font-bold">Who we are</h2>

            <h3 className="text-lg">"A Vision of Uncompromising Comfort and Luxury"</h3>
            <p className="mb-6">
            Founded in 2009, Knight Kavalier was established with a singular mission: to revolutionize the 
            sleep experience by combining unparalleled comfort and luxury. Disappointed by the absence of 
            bedding that offered both exceptional quality and aesthetic elegance at an affordable price, our 
            founders embarked on a quest to create sheets that would transform every bedroom into a 
            sanctuary of tranquility.
            </p>

            <br></br>


            <h2 className="text-xl mb-1 font-serif font-bold">What we do</h2>

            
            <p className="mb-6">
            Knight Kavalier is a premium bedding brand that specializes in providing high-quality, luxurious 
            bedsheets designed to elevate the sleep experience. The brand offers a range of 100% cotton 
            bedsheets with a satin finish and a 400-thread count for ultimate softness, comfort, and 
            durability. Knight Kavalier focuses on producing breathable, soft, and long-lasting bedding that 
            combines luxury and style at an affordable price.

            </p>

            <br></br>

            <h2 className="text-xl mb-1 font-serif font-bold">Why we</h2>

            
            <p className="mb-6">
            Frequently, individuals compromise on bedding that fails to provide the comfort they deserve. 
            Whether it is sheets that wrinkle, lose their softness, or do not withstand repeated washing, the 
            pursuit of luxurious bedding that is both durable and comfortable can be daunting. People 
            sought high-quality sheets that not only enhanced their visual appeal but also transformed every 
            night of sleep into a rejuvenating retreat. Knight Kavalier revolutionized the bedding industry by 
            employing only the finest 100% cotton and meticulously crafting our sheets with a luxurious 
            satin finish. We deliver a bedding experience that is not only soft and breathable but also 
            durable and long-lasting. Each product is meticulously designed to evoke the same level of 
            comfort as its visual appearance, ensuring the highest standard of comfort without compromise.
            </p>

            <br></br>


            <h2 className="text-xl mb-1 font-serif font-bold">Purpose of Knight Kavalier</h2>

            <p className="mb-6">
            The primary objective of Knight Kavalier is to elevate the ordinary sleep experience into a 
            luxurious and comfortable haven by offering premium, high-quality bedding that seamlessly 
            blends elegance, durability, and affordability. The brand endeavors to instill a sense of relaxation 
            and indulgence, enabling customers to attain a superior sleep experience and transform their 
            bedrooms into sanctuaries of comfort.

            </p>

          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}