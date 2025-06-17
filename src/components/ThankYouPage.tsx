import React from 'react';
import { Check, Shield, Clock, Headphones, Star, Crown, Zap, CheckCircle } from 'lucide-react';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 p-4 rounded-full">
              <span className="text-4xl">🎉</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Thank You, You're In!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Welcome Aboard! You've taken a huge step toward a checkout that finally converts. 
            While you explore the builder, grab this once-in-a-lifetime upgrade…
          </p>
        </div>

        {/* Main Offer */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative bg-white rounded-3xl border-4 border-orange-400 shadow-2xl p-8 transition-all duration-300">
            {/* Fire Badge */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full font-bold flex items-center space-x-2 text-lg">
                <span className="text-2xl">🔥</span>
                <span>50% OFF Today Only</span>
              </div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                DFY Checkout Makeover
              </h2>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="text-2xl text-gray-400 line-through">Normally $499</span>
                <span className="text-5xl font-bold text-orange-600">$249</span>
              </div>
              <p className="text-lg text-gray-600">
                exclusive for our new Tester/Pro members
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                'We design, brand & integrate your Stripe checkout in 72 hours',
                'Unlimited revisions until it\'s perfect',
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
              🟧 Upgrade to DFY for $249 →
            </button>

            {/* Urgency Message */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900 mb-2">
                  You'll never see this offer ever again, and we're serious—
                </p>
                <p className="text-lg font-bold text-red-600">
                  lock in your plan before you close this page.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Statement */}
        <div className="text-center mb-12">
          <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
            <div className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              <div>If you don't</div>
              <div>like what we're</div>
              <div>offering, we'll refund</div>
              <div>you right then</div>
              <div>and there.</div>
            </div>
          </div>
        </div>

        {/* Risk-Free Badges */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-8 w-8 text-green-500 mr-2" />
            <h3 className="text-2xl font-bold text-gray-900">Risk-Free Guarantee</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-3"> 
              <div className="bg-blue-100 p-4 rounded-full">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900">100% Stripe-secure</h4>
              <p className="text-gray-600 text-sm">your data stays safe</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-green-100 p-4 rounded-full">
                <Crown className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900">7-day money-back</h4>
              <p className="text-gray-600 text-sm">guarantee on DFY</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-purple-100 p-4 rounded-full">
                <Headphones className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900">Priority support</h4>
              <p className="text-gray-600 text-sm">for immediate answers</p>
            </div>
          </div>
        </div>

        {/* Final Urgency */}
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