import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp } from 'lucide-react';

const PainProof: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Which One Would <span className="text-blue-600">YOU</span> Trust 
            <br />With Your Card?
          </h2> */}

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Customers Don’t Like Default Checkout. <br/>
        <span className="text-blue-750"> Here’s What They Do Like.</span> 
           
          </h2>


          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stripe may be secure — but your customer doesn’t care. They care if it looks trustworthy, branded, and real.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Default Stripe - Pain Point */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
              <AlertTriangle className="h-4 w-4" />
              <span>Conversion Killer</span>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Default Stripe Checkout</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="h-3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="h-10 bg-gray-100 rounded border"></div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="h-10 bg-gray-100 rounded border"></div>
                </div>
              </div>
              <div className="mt-6 bg-blue-600 h-12 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">Complete Payment</span>
              </div>
              <div className="mt-4 space-y-2 text-sm text-gray-500">
            
              </div>
            </div>
          </div>

          {/* CheckoStyle - Solution */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
              <TrendingUp className="h-4 w-4" />
              <span>Conversion Booster</span>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">CheckoStyle Checkout</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md border border-blue-100">
                  <div className="h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded mb-2"></div>
                  <div className="h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded w-2/3 opacity-70"></div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-blue-100">
                  <div className="h-10 bg-gradient-to-r from-gray-50 to-blue-50 rounded border-2 border-blue-200"></div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-blue-100">
                  <div className="h-10 bg-gradient-to-r from-gray-50 to-blue-50 rounded border-2 border-blue-200"></div>
                </div>
              </div>
              <div className="mt-6 bg-gradient-to-r from-green-500 to-green-600 h-12 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">Secure Checkout →</span>
              </div>
              <div className="mt-4 space-y-2 text-sm text-green-700">
               
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">The Reality Check</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-yellow-300">67%</div>
              <div className="text-blue-100">of customers abandon ugly checkouts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300">3.2x</div>
              <div className="text-blue-100">higher trust with branded forms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300">$47K</div>
              <div className="text-blue-100">average revenue lost monthly</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainProof;