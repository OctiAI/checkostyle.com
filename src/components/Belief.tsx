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

        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
          {/* Benefits List */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
          <p className="text-xl md:text-2xl text-gray-600 mb-2 max-w-4xl mx-auto leading-relaxed mb-14 text-center">
            You earned the click. You made the sale. Don’t lose them at the final screen.
          </p>
            
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
                  <h3 className="text-xl font-bold text-gray-900 mt-2">{benefit.title}</h3>
                </div>
              </motion.div>
            ))}  

          <p className="text-xl md:text-2xl text-gray-600 mb-2 max-w-4xl mx-auto leading-relaxed mb-14 text-center">
           Just plug in CheckoStyle and launch a branded checkout in minutes.
          </p>
          
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Belief;