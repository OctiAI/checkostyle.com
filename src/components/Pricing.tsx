import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing: React.FC = () => {
 const plans = [
  {
    name: 'Tester',
    price: '$9',
    period: 'One-Time',
    description: '30 Day Builder Access',
    features: [
      'Live Support',
      'One Checkout Page (Secretly doesn’t go live)',
    ],
    cta: 'Try for $9',
    popular: false,
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Pro',
    price: '$129',
    period: '/month or $79/m billed annually',
    description: 'Most popular for growing brands',
    features: [
      '5 Designed Checkouts (They go live lol)',
      'Unlimited Products',
      'A/B Split Testing',
      'Advanced Analytics including G-Analytics & Microsoft Clarity',
      'Priority Support',
      'Advanced Builder',
      'Custom CSS',
      'DFY Bonus Templates',
    ],
    cta: 'Upgrade to Pro',
    popular: true,
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'DFY',
    price: '$499 One-Time',
    period: '+ $79/m or Free w/ $948/y',
    description: 'We build and optimize it for you',
    features: [
      'CRO Service',
      'We build it & integrate it',
      'Unlimited Revisions',
      'Satisfaction Guarantee',
    ],
    cta: 'Done-For-You Setup',
    popular: false,
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'Enterprise',
    price: 'From $399',
    period: '/month',
    description: 'Custom solutions & VIP treatment',
    features: [
      'Dedicated Success Manager',
      'Whitelabeling & Reselling',
      'Custom Integrations',
      'Slack Support (VIP Level)',
      'Unlimited Checkouts & Accounts',
    ],
    cta: 'Talk to Sales',
    popular: false,
    color: 'from-gray-700 to-gray-800',
  },
];

  ];

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
           <motion.div
  className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h3 className="text-2xl font-bold">Choose Your Plan</h3>
  <h4 className="text-l mb-5">ⓘ Transparent pricing tailored to every stage</h4>
  <div className="grid md:grid-cols-4 gap-8 text-left text-sm">
    <div>
      <div className="text-xl font-bold text-yellow-300 mb-2">Tester</div>
      <ul className="text-blue-100 space-y-1">
        <li>$9 One-Time</li>
        <li>30 Day Builder Access</li>
        <li>Live Support</li>
        <li>One Checkout Page (hidden)</li>
      </ul>
    </div>
    <div>
      <div className="text-xl font-bold text-yellow-300 mb-2">Pro</div>
      <ul className="text-blue-100 space-y-1">
        <li>$129/m OR $79/m (annually)</li>
        <li>5 Designed Checkouts (live)</li>
        <li>Unlimited Products</li>
        <li>A/B Split Testing</li>
        <li>Advanced Analytics (G-Analytics & Clarity)</li>
        <li>Priority Support</li>
        <li>Advanced Builder</li>
        <li>Custom CSS</li>
        <li>DFY Bonus Templates</li>
      </ul>
    </div>
    <div>
      <div className="text-xl font-bold text-yellow-300 mb-2">DFY</div>
      <ul className="text-blue-100 space-y-1">
        <li>$499 One-Time + $79/m</li>
        <li>Or FREE with $948/y plan</li>
        <li>CRO Service</li>
        <li>We build & integrate it</li>
        <li>Unlimited Revisions</li>
        <li>Satisfaction Guarantee</li>
      </ul>
    </div>
    <div>
      <div className="text-xl font-bold text-yellow-300 mb-2">Enterprise</div>
      <ul className="text-blue-100 space-y-1">
        <li>From $399/m</li>
        <li>Dedicated Success Manager</li>
        <li>Whitelabeling & Reselling</li>
        <li>Custom Integrations</li>
        <li>Slack Support (VIP)</li>
        <li>Unlimited Checkouts & Accounts</li>
      </ul>
    </div>
  </div>
</motion.div>

          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center border-2 border-blue-200"
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
            <strong>No questions asked.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
