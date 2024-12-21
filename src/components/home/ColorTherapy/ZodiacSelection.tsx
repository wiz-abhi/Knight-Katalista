import React from 'react';

interface Props {
  onSelect: (sign: string) => void;
}

const zodiacSigns = [
  { name: 'Aries', date: 'Mar 21 - Apr 19' },
  { name: 'Taurus', date: 'Apr 20 - May 20' },
  { name: 'Gemini', date: 'May 21 - June 20' },
  { name: 'Cancer', date: 'June 21 - July 22' },
  { name: 'Leo', date: 'July 23 - Aug 22' },
  { name: 'Virgo', date: 'Aug 23 - Sep 22' },
  { name: 'Libra', date: 'Sep 23 - Oct 23' },
  { name: 'Scorpio', date: 'Oct 24 - Nov 21' },
  { name: 'Sagittarius', date: 'Nov 22 - Dec 21' },
  { name: 'Capricorn', date: 'Dec 22 - Jan 19' },
  { name: 'Aquarius', date: 'Jan 20 - Feb 18' },
  { name: 'Pisces', date: 'Feb 19 - Mar 20' },
];

export function ZodiacSelection({ onSelect }: Props) {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-center mb-6">
        Take our color therapy quiz and
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Find out your ideal sleep colors.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {zodiacSigns.map((sign) => (
          <button
            key={sign.name}
            onClick={() => onSelect(sign.name)}
            className="group p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={`https://images.unsplash.com/photo-1620428268482-cf1851a36764?w=200`}
              alt={sign.name}
              className="w-full aspect-square object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform"
            />
            <h3 className="font-medium text-lg">{sign.name}</h3>
            <p className="text-sm text-gray-600">{sign.date}</p>
          </button>
        ))}
      </div>
    </div>
  );
}