import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Clock, TrendingDown, Shield } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6"
            animate={{ pulse: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Clock className="h-4 w-4" />
            <span className="font-semibold">Every day you wait & click ignore = money forever lost.</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Every Click You Lose at Checkout
            <br />
            Is Money You <span className="text-red-600">Earned</span> — 
            <span className="text-red-600">Wasted.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Don't let Stripe's default form cost you trust, sales, and momentum.
            <br />
            <strong>Your competitors are already optimizing their checkouts.</strong>
          </p>
        </motion.div>

        {/* Urgency Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-6 text-center border-2 border-red-200 shadow-lg hover:shadow-[0_0_5px_rgba(255,223,93,0.6)] transition-shadow duration-300">
            <TrendingDown className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-red-600 mb-2">67%</div>
            <div className="text-gray-700">abandon default checkouts  30 seconds</div>
          </div>

          
          <div className="bg-white rounded-2xl p-6 text-center border-2 border-orange-200 shadow-lg hover:shadow-[0_0_5px_rgba(255,223,93,0.6)] transition-shadow duration-300">                                
            
            <div className="relative group inline-block align-right ml-60">
            <div className="w-5 h-5 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xl font-bold cursor-default">
             ⓘ
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[280px] text-sm text-white bg-gray-900 px-4 py-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              Number based on actual performance across 127+ DTC brands using CheckoStyle, with an average of 10,000 monthly visitors per brand.
            </div>
          </div>


            
            <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-orange-600 mb-2">$3,247</div>
            <div className="text-gray-700">average monthly revenue lost per 1k visitors</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center border-2 border-green-200 shadow-lg hover:shadow-[0_0_5px_rgba(255,223,93,0.6)] transition-shadow duration-300">
            <ArrowRight className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-green-600 mb-2">5 min</div>
            <div className="text-gray-700">to fix your checkout and start converting</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 rounded-full font-bold text-xl flex items-center space-x-3 shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 25px 50px rgba(34, 197, 94, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Build My Checkout Now</span>
            <ArrowRight className="h-6 w-6" />
          </motion.button>
          
          <motion.button
            className="bg-white text-gray-800 px-12 py-5 rounded-full font-bold text-xl flex items-center space-x-3 shadow-xl hover:shadow-2xl border-2 border-gray-200 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="h-6 w-6" />
            <span>Book a Setup Call</span>
          </motion.button>
        </motion.div>

        {/* Final Push */}
        <motion.div
          className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-center text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">
            The Choice Is Simple
          </h3>
          <p className="text-blue-100 text-lg mb-6">
            Keep losing money to an ugly checkout, or fix it in 5 minutes and start converting.
            <br />
            <strong className="text-white">Your future self will thank you.</strong>
          </p>
          <div className="text-sm text-blue-200">
            ⚡ No risk • ⚡ 30-day guarantee • ⚡ 5-minute setup
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
