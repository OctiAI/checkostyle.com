import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, ShieldCheck, Timer  } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-12 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your Stripe Checkout
            <br />
            <span className="text-5xl md:text-7xl" style={{ color: '#E63946' }}>
              Might Be Killing
            </span>
            <br />
            Your Sales.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="underline">You built a beautiful site.</span> A real brand. But Stripe hits your customer with a checkout 
            that looks like it's from 2011. <span className="font-semibold text-gray-800">Cold. Generic. Unbranded.</span>
          </motion.p>


          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >

            
            <motion.button
              className="bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="h-5 w-5" />
              <span>Book a Setup Call</span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-gray-500">Stripe Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-gray-500">100% Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <Timer className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-gray-500">5-Min Setup</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;