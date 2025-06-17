// src/components/ZapierForm.jsx
import React, { useState } from 'react';

const ZapierForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // 👉 Replace this with your Zapier “Catch Hook” URL:
  const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/123456/abcdef/';

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formData.name,
          phone: formData.phone,
          email: formData.email
        })
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        console.error('Zapier responded', res.status, await res.text());
      }
    } catch (err) {
      console.error('Error sending to Zapier', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Thanks!</h2>
        <p>We’ve received your info and will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8"
    >
      {/* Full Name */}
      <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 space-y-6"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
          Phone<span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 123-4567"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 space-y-6"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitting}
        className=" w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-opacity disabled:opacity-50"
      >
        {submitting ? 'Submitting…' : 'Book My Free Call'}
      </button>
    </form>
  );
};

export default ZapierForm;
