import React, { useState } from 'react';

interface Props {
  sign: string;
  onSubmit: (data: any) => void;
}

export function QuizForm({ sign, onSubmit }: Props) {
  const [formData, setFormData] = useState({
    email: '',
    preference: '',
    bedtime: '',
    wakeTime: '',
    important: '',
    gender: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="flex gap-6 mb-8">
        <img
          src={`https://images.unsplash.com/photo-1620428268482-cf1851a36764?w=200`}
          alt={sign}
          className="w-32 h-32 object-cover rounded-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Tell us where to email your results, {sign}!
          </h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="preference" className="block text-sm font-medium text-gray-700 mb-1">
            Do you prefer a warm or cold sleeping environment?
          </label>
          <select
            id="preference"
            name="preference"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            value={formData.preference}
            onChange={handleChange}
          >
            <option value="">Select preference</option>
            <option value="warm">Warm</option>
            <option value="cold">Cold</option>
          </select>
        </div>

        <div>
          <label htmlFor="bedtime" className="block text-sm font-medium text-gray-700 mb-1">
            In general, what time do you go to bed?
          </label>
          <input
            type="time"
            id="bedtime"
            name="bedtime"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            value={formData.bedtime}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="wakeTime" className="block text-sm font-medium text-gray-700 mb-1">
            In general, what time do you wake up?
          </label>
          <input
            type="time"
            id="wakeTime"
            name="wakeTime"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            value={formData.wakeTime}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="important" className="block text-sm font-medium text-gray-700 mb-1">
            What's important to you when picking sheets?
          </label>
          <textarea
            id="important"
            name="important"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            rows={4}
            value={formData.important}
            onChange={handleChange}
            placeholder="Price, comfort, looks, better sleep, etc"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors"
        >
          Get My Results
        </button>
      </form>
    </div>
  );
}