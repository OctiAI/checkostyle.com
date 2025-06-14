import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Crown } from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Tester',
      price: '$9',
      period: ' One-Time',
      description: '30 Day Builder Access',
      features: [
        '30 Day Builder Access',
        'Live Support',
        'One Checkout Page',
      ],
      cta: 'Start with Tester',
      popular: false,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Pro',
      price: '$129',
      period: '/month',
      description: '$79/m annually ($948/y)',
      features: [
        '5 Designed Checkouts',
        'Unlimited Products',
        'A/B Split Testing',
        'Advanced Analytics including G-Analytics & Microsoft Clarity for free',
        'Priority Support',
        'Advanced Builder',
        'Custom CSS',
        'DFY Bonus Templates',
      ],
      cta: 'Upgrade to Pro',
      popular: false,
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'DFY',
      price: '$499',
      period: '/One-Time',
      description: 'Free with $948/year',
      features: [
        'CRO Service',
        'We build it & integrate it',
        'Unlimited Revisions',
        'Satisfaction Guarantee',
      ],
      cta: 'Order DFY Service',
      popular: true,
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/m',
      description: 'Starting at',
      features: [
        'Dedicated Success Manager',
        'Whitelabeling & Reselling',
        'Custom Integrations',
        'Slack Support (VIP Level Support)',
        'Unlimited Checkouts & Accounts',
      ],
      cta: 'Talk to Sales',
      popular: false,
      color: 'from-gray-700 to-gray-800',
    },
  ];

  const getPriceInfo = (plan: typeof plans[number]) => {
    if (billingCycle === 'monthly') {
      return { price: plan.price, period: plan.period, description: plan.description };
    }
    switch (plan.name) {
      case 'Pro':
        return { price: '$79', period: '/month', description: '($948/year)' };
      case 'DFY':
        return { price: '$948', period: '/year ', description: '(Best Value)' };
      default:
        return { price: plan.price, period: plan.period, description: plan.description };
    }
  };

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
              Conversion Boost
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every plan pays for itself with just a few extra sales.
          </p>
        </motion.div>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 rounded-l-full border ${
              billingCycle === 'monthly'
                ? 'bg-green-500 text-white border-green-500'
                : 'bg-gray-200 text-gray-700 border-gray-200'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-4 py-2 rounded-r-full border ${
              billingCycle === 'yearly'
                ? 'bg-green-500 text-white border-green-500'
                : 'bg-gray-200 text-gray-700 border-gray-200'
            }`}
          >
            Yearly
          </button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const { price, period, description } = getPriceInfo(plan);
            return (
              <motion.div
                key={index}
                className={`relative flex flex-col h-full bg-white rounded-2xl border-2 ${
                  plan.popular
                    ? 'border-green-300 shadow-2xl'
                    : 'border-gray-200 shadow-lg'
                } p-8 transition-all duration-300 hover:shadow-xl`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Badges */}
                {plan.name === 'DFY' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Best Value</span>
                    </div>
                  </div>
                )}
                {plan.name === 'Tester' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{price}</span>
                    <span className="text-gray-600">{period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`mt-auto w-full bg-gradient-to-r ${plan.color} text-white py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center border-2 border-blue-400 shadow-[0_1px__20px_2px_rgb(255,215,0)]
"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="h-8 w-8 text-yellow-500" />
            <h3 className="text-2xl font-bold text-gray-900">
              30-Day Money-Back Guarantee
            </h3>
          </div>
          <p className="text-gray-700 text-lg">
            If CheckoStyle doesn't increase your conversion rate within 30 days,
            we'll refund every penny.
            <br />
            <strong>No questions asked.</strong></p>
        
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
