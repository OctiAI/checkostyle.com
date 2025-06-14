import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, DollarSign } from 'lucide-react';

const Transformation: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Double Your Conversions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
              Without Changing Your Product or Price.
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Marcus Chen</h3>
                  <p className="text-gray-600">SaaS Founder</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 leading-relaxed">
                "I was losing sleep over my 7% conversion rate. Same traffic, same product, but customers kept bouncing at checkout. 
                <br /><br />
                Switched to CheckoStyle and hit <strong className="text-green-600">14.2% CVR</strong> in the first week. 
                <br /><br />
                Same traffic. Same product. Just a better checkout."
              </blockquote>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-red-500 mb-1">7%</div>
                <div className="text-sm text-gray-600">Before CVR</div>
              </div>
              <div className="flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-green-400 shadow-sm">  
                <div className="text-2xl font-bold text-green-600 mb-1">14.2%</div>
                <div className="text-sm text-gray-600">After CVR</div>
              </div>
            </div>
          </motion.div>

          {/* Stats Side */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Target className="h-8 w-8 text-green-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2 #FACC15">+103%</div>
                <div className="text-gray-600">Conversion Lift</div>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <DollarSign className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">+18%</div>
                <div className="text-gray-600">AOV Increase</div>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">The Math Is Simple</h3>
              <div className="space-y-2 text-lg">
                <div>1,000 visitors × 7% = 70 sales</div>
                <div>1,000 visitors × 14% = 140 sales</div>
                <div className="border-t border-white/20 pt-2 font-bold text-yellow-400">
                  = 100% more revenue
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4 text-center">Average Results</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Time to see results</span>
                  <span className="font-semibold text-green-600">24-48 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Conversion improvement</span>
                  <span className="font-semibold text-green-600">85-150%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Setup time</span>
                  <span className="font-semibold text-green-600">⚡Under 5 minutes</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;