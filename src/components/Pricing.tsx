import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown } from 'lucide-react';

const featuresList = (items: string[]) => (
  <ul className="mt-6 space-y-2 text-sm text-gray-700">
    {items.map((item, i) => (
      <li key={i} className="flex items-start space-x-2">
        <Check className="w-4 h-4 mt-1 text-green-500" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Conversion{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
              Boost
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every plan pays for itself with just a few extra sales.
          </p>
        </motion.div>

        {/* 4-Column Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Tester */}
          <motion.div
            className="border border-gray-200 rounded-2xl shadow-md p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">Tester</h3>
            <p className="text-gray-500 mb-4">Perfect for getting started</p>
            <div className="text-4xl font-bold text-gray-900">$9</div>
            <p className="text-sm text-gray-500 mb-6">One-Time</p>
            {featuresList([
              '30 Day Builder Access',
              'Live Support',
              'One Checkout Page',
            ])}
            <button className="mt-8 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Start with Tester
            </button>
          </motion.div>

          {/* Pro */}
          <motion.div
            className="border-2 border-green-500 rounded-2xl shadow-lg p-8 text-center relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pro</h3>
            <p className="text-gray-500 mb-4">Most popular for growing businesses</p>
            <div className="text-4xl font-bold text-gray-900">$129</div>
            <p className="text-sm text-gray-500 mb-6">
              /month or $79/month billed annually ($948/year)
            </p>
            {featuresList([
              '5 Designed Checkouts',
              'Unlimited Products',
              'A/B Split Testing',
              'Advanced Analytics including G-Analytics & Microsoft Clarity for free',
              'Priority Support',
              'Advanced Builder',
              'Custom CSS',
              'DFY Bonus Templates',
            ])}
            <button className="mt-8 px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition">
              Upgrade My Checkout
            </button>
          </motion.div>

          {/* DFY */}
          <motion.div
            className="border border-gray-200 rounded-2xl shadow-md p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">DFY</h3>
            <p className="text-gray-500 mb-4">Done-For-You Service</p>
            <div className="text-4xl font-bold text-gray-900">$499</div>
            <p className="text-sm text-gray-500 mb-6">One-Time + $79/m</p>
            {featuresList([
              'Free with $948/year Pro plan',
              'CRO Service',
              'We build it & integrate it',
              'Unlimited Revisions',
              'Satisfaction Guarantee',
            ])}
            <button className="mt-8 px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">
              Get DFY Plan
            </button>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            className="border border-gray-200 rounded-2xl shadow-md p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <p className="text-gray-500 mb-4">For teams and agencies</p>
            <div className="text-4xl font-bold text-gray-900">From $399/m</div>
            {featuresList([
              'Dedicated Success Manager',
              'Whitelabeling & Reselling',
              'Custom Integrations',
              'VIP Level Slack Support',
              'Unlimited Checkouts & Accounts',
            ])}
            <button className="mt-8 px-6 py-3 rounded-full bg-gray-800 text-white font-semibold hover:bg-gray-900 transition">
              Talk to Sales
            </button>
          </motion.div>
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
            If CheckoStyle doesn’t increase your conversion rate within 30 days,<br />
            we’ll refund every penny. <strong>No questions asked.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
