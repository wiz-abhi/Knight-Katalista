import React from 'react';

interface Props {
  onStart: () => void;
}

export function ColorTherapyIntro({ onStart }: Props) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-serif font-bold mb-8">Color Therapy</h2>
      <div className="flex justify-center gap-4 mb-8">
        {['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo'].map((sign) => (
          <div key={sign} className="w-24">
            <img
              src={`https://images.unsplash.com/photo-1620428268482-cf1851a36764?w=200`}
              alt={sign}
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
      <button
        onClick={onStart}
        className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors"
      >
        Find my ideal sleep color
      </button>
    </div>
  );
}