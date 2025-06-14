import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Smartphone, Paintbrush, Zap, CheckCircle } from 'lucide-react';

const Trust: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Secure",
      description: "Still uses Stripe's secure backend. We just make it beautiful.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Paintbrush,
      title: "Drag & Drop Builder", 
      description: "No code required. Design your checkout in minutes.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Perfect on every device. 60% of checkouts happen on mobile.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "CRO Optimized",
      description: "Built-in conversion best practices and A/B testing ready.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
              Stripe&nbsp;
            </span>Secure. Your Brand’s Presence.<br /> Stripe’s Power.&nbsp;
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
             CheckoStyle
            </span> Optimized.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for founders who care about conversions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
          <p className="text-lg font-bold text-gray-900 text-center mb-14">
            CheckoStyle overlays your existing Stripe Checkout — <br></br> giving you total visual control, brand presence, and trust.
          </p>
        {/* Trust Proof */}
        <motion.div
          className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-8 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">S</span>
              </div>
              <span className="text-sm">Stripe Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-green-400" />
              <span className="text-sm">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <span className="text-sm">99.9% Uptime SLA</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Your Payments Stay With Stripe</h3>
          <p className="text-blue-100">We never touch your money. Just make the experience better.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;