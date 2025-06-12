import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, ShieldCheck, Timer, Shield, Clock } from 'lucide-react';

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
            className="flex flex-col text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="underline">You built a beautiful site.</span> A real brand. But Stripe hits your customer with a checkout 
            that looks like it's from 2011. <span className="font-semibold text-gray-800">Cold. Generic. Unbranded.</span>

                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Used by 127+ DTC founders to double checkout conversion.
          </p>
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
        <motion.div  className="flex flex-wrap items-center justify-center gap-8 opacity-70 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}>
        
        </motion.div>

Used by 127+ DTC founders to double checkout conversion”

            
          </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 opacity-70 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <span className="text-sm text-gray-700 font-medium">Stripe Certified</span>
          </div>
          <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
            <Shield className="h-5 w-5 text-green-500" />
            <span className="text-sm text-gray-700 font-medium">30-Day Guarantee</span>
          </div>
          <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
            <Clock className="h-5 w-5 text-blue-500" />
            <span className="text-sm text-gray-700 font-medium">5-Min Setup</span>
          </div>
        </motion.div>
          

        </div>
      </div>
    </section>
  );
};

export default Hero;