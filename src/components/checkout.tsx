import React, { useState } from 'react';
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

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">CheckoStyle</span>
            </div>
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
                  <span className="text-green-600">$9</span>
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

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name on Card */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Card Details */}
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Card Details
                  </label>
                  <div className="space-y-3">
                    <div className="relative">
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 pr-12"
                        placeholder="1234 1234 1234 1234"
                        required
                      />
                      <CreditCard className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        placeholder="MM/YY"
                        required
                      />
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        placeholder="CVV"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">CheckoStyle Tester Plan</span>
                    <span className="font-bold text-green-600">$9.00</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  onClick={() => {
                    setTimeout(() => {
                      window.location.href = `https://checkostyle.com/thankyoupage.html`;
                    }, 200);
                  }}>
                  <Lock className="w-5 h-5" />
                  <span>Start My 30-Day Test →</span>
                </button>

                {/* Microcopy */}
                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  By clicking, you agree to our{' '}
                  <a href="#" className="text-green-600 hover:text-green-700 underline">
                    Terms of Service
                  </a>{' '}
                  &{' '}
                  <a href="#" className="text-green-600 hover:text-green-700 underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Security Badges */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-600 font-medium">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-600 font-medium">SOC2 Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-600 font-medium">Stripe Secured</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;