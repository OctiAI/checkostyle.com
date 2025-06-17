import React, { useState } from 'react';
import { Check, Star, Crown, Calendar, Zap } from 'lucide-react';

const ThankYouCall = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 p-3 rounded-2xl">
              <Calendar className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Thanks! Your strategy call
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
              is confirmed.
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
            Want to fix your checkout today?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Skip the wait—unlock full builder access and brand your Stripe checkout in minutes.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="w-full flex justify-end mb-6 lg:mb-8">
          <div className="flex items-center space-x-4 mr-2 md:mr-24">
            {/* Label: Monthly */}
            <span className="font-medium text-gray-800">Monthly</span>
            {/* Toggle Switch */}
            <button
            onClick={() => setAnnual(prev => !prev)}
              className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${
               annual ? 'bg-green-400' : 'bg-gray-300'
              }`}
            >
              <span
                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                  annual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
          {/* Label: Annual */}
          <span className="font-medium text-gray-800">Annual</span>
        </div>
      </div>

        {/* Offer Box */}
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-white rounded-2xl border-2 border-green-300 shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-4 py-2 rounded-full font-bold flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>Limited Time</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Pro Plan</h3>
              <p className="text-gray-600 mb-4">Full Access to all Features</p>

              {/* Price display */}
              <div className="mb-4">
                <div className="text-center">
                  {!annual ? (
                    <>
                      <span className="text-4xl font-bold text-gray-900">$129</span>
                      <span className="text-gray-600">/month</span>
                    </>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-green-600">$79</span>
                      <span className="text-gray-600">/month</span>
                      <div className="text-sm text-green-600 font-medium">billed annually</div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                '5 Designed Checkouts',
                'Unlimited Products',
                'A/B Split Testing',
                'Advanced Analytics including G-Analytics & Microsoft Clarity for free',
                'Priority Support',
                'Advanced Builder',
                'Custom CSS',
                'DFY Bonus Templates'
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 mb-4">
              Get Pro Plan Now
            </button>

            {/* Special Note */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200">
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="h-5 w-5 text-orange-500" />
                <span className="font-semibold text-gray-900">Special Bonus</span>
              </div>
              <p className="text-gray-700 text-sm">
                Any Pro subscription before your call comes with a <strong>free 1:1 audit</strong> (valued at $499). Cancel anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Crown className="h-4 w-4 text-yellow-500" />
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-blue-500" />
              <span>Instant Access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouCall;
