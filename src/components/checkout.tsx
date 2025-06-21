import React, { useMemo } from 'react';

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
  Zap,
  FileText,
  Repeat,
  BarChart2,
  LifeBuoy,
  Code,
} from 'lucide-react';
import { CheckoutPageWrapper, useCartData } from './checkoutLogic';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const iconMap: Record<string, React.ComponentType<any>> = {
  CreditCard,
  Shield, 
  CheckCircle, 
  DollarSign,
  Calendar,
  Smartphone,
  MessageCircle,
  ShoppingCart,
  Lock,
  X,
  Award,
  Zap,
  FileText,
  Repeat,
  BarChart2,
  LifeBuoy,
  Code,
};

const iconColorMap: Record<string, string> = {
  DollarSign:     'text-green-600',
  Calendar:       'text-blue-600',
  Smartphone:     'text-purple-600',
  MessageCircle:  'text-orange-600',
  ShoppingCart:   'text-indigo-600',
  CheckCircle:    'text-green-600',  // or another default
  Lock:           'text-green-600',
  X:              'text-red-600',    // maybe red for cancel
  FileText:       'text-blue-600',
  Repeat:         'text-purple-600',
  BarChart2:      'text-orange-600',
  LifeBuoy:       'text-red-500',
  Code:           'text-indigo-600',
  // add other icon-color pairs as needed
};


const CheckoutPage: React.FC = () => {
  // Extract plan ID from the URL
const planId = useMemo(() => {
  return window.location.search.replace('?', '');

}, []);
console.log("planId:", planId);


  const { data: planData, loading, error } = useCartData(planId);
  console.log(JSON.stringify(planData, null, 2));
  // Initialize Stripe.js
  const stripePromise = loadStripe('pk_test_51QnPa5RoGKTuFXtOjUSXFwNJ0DBI4WCGvmc7F1Mi09g3RQ578YBgqDJYagleBSna82gWxLha31VXqc9HXHNGwlQ000lnTEuagR');

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
                {loading ? (
                  <p className="text-center text-gray-500">Loading plan details…</p>
                ) : error || !planData ? (
                  <p className="text-center text-red-500">Failed to load plan details.</p>
                ) : (
                  (() => {
                    const display = planData.cart_display;
                    // Choose bullet/icon colors based on planId if desired:
                    const bulletColor = 'text-green-600';
                    const footerIconColor = 'text-blue-600';

                    return (
                      <>
                        {/* HEADLINE & SUBHEADLINE */}
                        <div className="text-center mb-8">
                          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            {display.headline}
                            {<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">{display.headline_span}</span>}
                          </h1>
                          {display.sub_headline && (
                            <p className="text-lg text-gray-600 leading-relaxed">
                              {display.sub_headline}
                            </p>
                          )}
                        </div>

                        {/* FEATURES */}
                        {display.main_label && (
                          <h3 className="font-semibold text-gray-900 mb-6 text-xl">
                            {display.main_label}
                          </h3>
                        )}
                        <ul className="space-y-4 mb-8">
                          {display.features.map((feat) => {
                            const IconComponent = iconMap[feat.icon] || CheckCircle;
                            const colorClass = iconColorMap[feat.icon] || 'text-green-600';

                            return (
                              <li key={feat.heading} className="flex items-start space-x-3">
                                <IconComponent
                                  className={`w-5 h-5 ${colorClass} mt-1 flex-shrink-0`}
                                />
                                <div>
                                  <p className="font-medium text-gray-900">{feat.heading}</p>
                                  {feat.text && (
                                    <p className="text-sm text-gray-600">{feat.text}</p>
                                  )}
                                </div>
                              </li>
                            );
                          })}
                        </ul>


                        {/* FOOTER “Secure & ...” */}
                        {display.footing && (
                          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-8">
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                              <Shield className={`w-5 h-5 ${footerIconColor} mr-2`} />
                              {display.footing}
                            </h4>
                            <ul className="space-y-2">
                              {display.footing_points.map((pt) => {
                                const IconComponent = iconMap[pt.icon] || CheckCircle;
                                return (
                                  <li key={pt.heading} className="flex items-start space-x-3">
                                    <IconComponent
                                      className={`w-4 h-4 ${bulletColor} mt-1.5 flex-shrink-0`}
                                    />
                                    <div>
                                      <span className="text-sm font-bold text-gray-700 flex-shrink-0">{pt.heading}</span>
                                        <span className="text-sm text-gray-700 flex-shrink-0">{pt.text}</span>
                                    </div>
                                  </li>
                                );
                              })}
                          </ul>
                          </div>
                        )}
                      </>
                    );
                  })()
                )}
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
