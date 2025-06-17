import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Clock, Headphones, Star, Crown, Zap, CheckCircle } from 'lucide-react';

const ThankYouPage = () => {
  const [priceChanged, setPriceChanged] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPriceChanged(true), 2000); // delay for animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-green-200 to-blue-300 rounded-full">
              <img
                src="https://checkostyle.com/images/CS_icon.webp"
                alt="CheckoStyle Logo"
                className="w-14 sm:w-36 h-auto opacity-90"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Thank You, You&apos;re In!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mt-4 mb-8">
            Welcome Aboard! You&apos;ve taken a huge step toward a checkout that finally converts.
            While you explore the builder, grab this once-in-a-lifetime upgrade…
          </p>
        </div>

        {/* Main Offer */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative bg-white rounded-3xl border-4 border-orange-400 shadow-2xl p-6 transition-all duration-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                DFY Checkout Makeover
              </h2>
              <div className="mb-4 h-16 flex items-center justify-center relative">
               {!priceChanged ? (
  <motion.span
    className="text-5xl font-bold text-orange-600"
  >
     Normally $499
  </motion.span>
) : (
  <div className="flex items-center justify-center space-x-4">
    <motion.span
      className="text-2xl text-gray-400 line-through"
      initial={{ opacity: 1, x: 70, color: '#EA580C', scale: 2  }}
      animate={{ opacity: 1, x: 0, color: '#9CA3AF', scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      Normally $499
    </motion.span>
    <motion.span
      className="text-5xl font-bold text-orange-600"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
    >
      $249
    </motion.span>
  </div>
)}

              </div>
              <p className="text-lg text-gray-600">
                exclusive for our new Tester/Pro members
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                'We design, brand & integrate your Stripe checkout in 72 hours',
                "Unlimited revisions until it's perfect",
                '1:1 CRO audit + bonus template pack',
                'Full Money Back Satisfaction Guarantee'
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-6 rounded-2xl font-bold text-xl hover:shadow-lg transition-all duration-300 hover:scale-105 mb-6">
              Upgrade to DFY for $249 →
            </button>

            {/* Urgency Message */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900 mb-2">
                  You&apos;ll never see this offer ever again, and we&apos;re serious—
                </p>
                <p className="text-lg font-bold text-red-600">
                  lock in your plan before you close this page.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="grid mx-auto sm:mx-40 md:grid-cols-3 gap-6 text-center mb-10">
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-blue-100 p-4 rounded-full">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-900">100% Stripe-secure</h4>
          </div>
          
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-green-100 p-4 rounded-full">
              <Crown className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-900">7-day money-back</h4>
          </div>
          
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-purple-100 p-4 rounded-full">
              <Headphones className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="font-bold text-gray-900">Priority support</h4>
          </div>
        </div>

        {/* Simple Guarantee Banner */}
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 border border-green-200 text-green-800 font-semibold px-6 py-3 rounded-full">
            Not satisfied? We offer a 100% refund—no questions asked.
          </span>
        </div>

        {/* Final Reminder */}
      <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <p className="text-lg mb-4">
            <strong>Last reminder:</strong> Take advantage of this offer before you close the page, or it's gone.. forever…
          </p>
          <p className="text-2xl font-script">Looking forward to your success 🥂</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
