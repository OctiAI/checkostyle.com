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
          {/* <h2 className="text-4xdl md:text-5xl font-bold text-gray-900 mb-6">
            Which One Would <span className="text-blue-600">YOU</span> Trust 
            <br />With Your Card?
          </h2> */}

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Customers Don’t Like Your <span style={{ color: '#E63946' }} >Default Checkout.</span> <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600"> Here’s What They Do Like:</span> 
        </h2>


          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stripe may be secure — but your customer doesn’t care. They care if it looks trustworthy, branded, and real.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Default Stripe - Pain Point */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 bg-red-500 text-white px-3 py-1 rounded-full font-semibold flex items-center space-x-1">
              <AlertTriangle className="h-4 w-4" />
              <span>Conversion Killer</span>
            </div>
            <div className="bg-gray-50 rounded-2xl p-2 border-2 border-red-200">
            <img className="rounded-2xl" src="https://checkostyle.com/images/oldCS.webp"></img>

              <div className="mt-4 space-y-2 text-gray-500">
            
              </div>
            </div>
          </div>

          {/* CheckoStyle - Solution */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full font-semibold flex items-center space-x-1">
              <TrendingUp className="h-4 w-4" />
              <span>14.2% CVR in 72 hours</span>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-2 border-2 border-green-200">
                   <img className="rounded-2xl max-h-full" src="https://checkostyle.com/images/newCS.webp"></img>
              <div className="mt-4 space-y-2 text-gray-500">

               </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 pt-3 text-white text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          
          <div className="w-full flex justify-end mt-0">
            <div className="relative group inline-block">
              <div className="w-6 h-6 text-gray-100 rounded-full flex items-center justify-center text-xl cursor-default">
                ⓘ
              </div>
              <div className="absolute right-0 mt-0 w-[280px] text-white bg-gray-900 px-4 py-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                Number based on actual performance across 127+ DTC brands using CheckoStyle, with an average of 10,000 monthly visitors per brand.
              </div>
            </div>
          </div>

          
          <h3 className="text-2xl font-bold mb-5">The Reality Check</h3>
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