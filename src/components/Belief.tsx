import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Code, Rocket } from 'lucide-react';

const Belief: React.FC = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "No need to switch platforms",
      description: "Keep your existing Stripe setup. Just add beautiful design on top."
    },
    {
      icon: Code,
      title: "No dev required", 
      description: "Drag, drop, done. Our visual builder handles all the technical stuff."
    },
    {
      icon: Clock,
      title: "Live in minutes",
      description: "From signup to live checkout in under 5 minutes. No waiting around."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            You've Done the Hard Part.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
              Now Fix the Final Step.
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits List */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 bg-white rounded-2xl p-6 border border-gray-200 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-3 flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mt-3">{benefit.title}</h3>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">The Bottom Line</h3>
              <p className="text-green-100 mb-4">
                You've already invested in driving traffic. Don't let a bad checkout waste it.
              </p>
              <motion.button
                className="bg-white text-green-600 px-6 py-3 rounded-full font-bold flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Fix Your Checkout Now</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Visual Demo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-2xl">
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-gray-100 h-4 rounded w-32 mb-2"></div>
                <div className="text-sm text-gray-600">CheckoStyle Builder</div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border-2 border-dashed border-blue-300">
                  <div className="text-sm text-blue-600 mb-2">Drop your logo here</div>
                  <div className="h-8 bg-blue-200 rounded w-20"></div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border-2 border-dashed border-green-300">
                  <div className="text-sm text-green-600 mb-2">Customize colors</div>
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border-2 border-dashed border-orange-300">
                  <div className="text-sm text-orange-600 mb-2">Add trust badges</div>
                  <div className="flex space-x-2">
                    <div className="h-4 bg-orange-200 rounded w-12"></div>
                    <div className="h-4 bg-orange-200 rounded w-16"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-gradient-to-r from-green-500 to-green-600 h-12 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Publish → Live</span>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              5 minutes
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Belief;