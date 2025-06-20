import React from 'react';
import { 
  CreditCard, 
  Shield, 
  CheckCircle, 
  Smartphone, 
  MessageCircle, 
  ShoppingCart,
  Lock,
  X,
  Calendar,
  DollarSign,
  Award,
  Zap
} from 'lucide-react';
import { CheckoutPageWrapper } from './checkoutLogic';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const CheckoutPage: React.FC = () => {
  // Extract plan ID from the URL
  const planId = window.location.search.replace('?', '');
  // Initialize Stripe.js
  const stripePromise = loadStripe('pk_live_51QnPa5RoGKTuFXtOojWjniXOxD6jfuTxdXQxnbuZNE9Hq14NJb9d8KMyUS6P0IaTm5WK9zt1qD685TvFFSbe01OI00JvtkwAlO');

  return (
    <Elements stripe={stripePromise}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">CheckoStyle</span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Main Checkout Container */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Plan Details */}
              <div className="p-8 lg:p-12 bg-gray-50 border-r border-gray-200">
                {/* Headline */}
                <div className="text-center mb-8">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Try CheckoStyle for Just{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
                      $9
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Get 30-day access to our full drag-and-drop checkout builder—no subscription, no commitment.
                  </p>
                </div>

                {/* Plan Inclusions */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">What's included:</h3>
                  
                  <div className="flex items-start space-x-3">
                    <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">One-Time $9 Payment</p>
                      <p className="text-sm text-gray-600">No hidden fees or recurring charges</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">30-Day Full Builder Access</p>
                      <p className="text-sm text-gray-600">Complete access to all builder features</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Smartphone className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Mobile-Responsive Templates</p>
                      <p className="text-sm text-gray-600">Looks perfect on every device</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Live Chat Support</p>
                      <p className="text-sm text-gray-600">Get help when you need it</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <ShoppingCart className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">One Branded Checkout Page</p>
                      <p className="text-sm text-gray-600">Preview mode included</p>
                    </div>
                  </div>
                </div>

                {/* Trust Signals */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield className="w-5 h-5 text-blue-600 mr-2" />
                    Your Security & Satisfaction
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Lock className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        <strong>100% Stripe-Powered</strong> — we never touch your card data
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        <strong>Cancel within 7 days</strong> for full refund
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <X className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        <strong>One-time payment</strong>, no auto-renew
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Payment Form */}
              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Your Order</h2>
                  <p className="text-gray-600">Secure checkout powered by Stripe</p>
                </div>

                {/* Render the Stripe-powered form */}
                <CheckoutPageWrapper planId={planId} />
              </div>
            </div>
          </div>

          {/* Footer Security Badges */}
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <Shield className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-600 font-medium">SSL Secured</span>
              <Award className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-600 font-medium">SOC2 Compliant</span>
              <CreditCard className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-600 font-medium">Stripe Secured</span>
            </div>
          </div>
        </div>
      </div>
    </Elements>
  );
};

export default CheckoutPage;
