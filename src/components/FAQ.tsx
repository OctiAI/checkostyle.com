import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, Code, DollarSign, TrendingUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: Shield,
      question: "Will this break Stripe?",
      answer: "Nope. CheckoStyle sits on top of Stripe's secure payment processing. Your payments still go through Stripe's PCI-compliant system — we just make the experience beautiful. Think of it like putting a custom skin on your existing setup."
    },
    {
      icon: Shield,
      question: "Is it secure?",
      answer: "100%. We're Stripe certified partners and never touch your payment data. All transactions go directly through Stripe's secure servers. We only handle the visual presentation layer, not the sensitive payment processing."
    },
    {
      icon: Code,
      question: "I'm not technical. Can I still use this?",
      answer: "Absolutely. Our drag-and-drop builder is designed for non-technical users. No coding required. If you can use Canva or WordPress, you can use CheckoStyle. Plus, our support team is always ready to help."
    },
    {
      icon: DollarSign,
      question: "What if it doesn't work?",
      answer: "We offer a 30-day money-back guarantee. If you don't see an improvement in your conversion rate within 30 days, we'll refund your money completely. No questions, no hassle."
    },
    {
      icon: TrendingUp,
      question: "Why should I pay for this?",
      answer: "Because going from 7% to 14% conversion rate literally doubles your revenue. If you're doing $10K/month, that's an extra $10K monthly. CheckoStyle pays for itself with just a few additional sales. The real question is: can you afford NOT to optimize your checkout?"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <HelpCircle className="h-8 w-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Common Questions
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Everything you need to know about CheckoStyle
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-2">
                    <faq.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-16">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          className="mt-12 text-center bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Book a free 15-minute call with our team. We'll answer your questions and show you exactly how CheckoStyle can boost your conversions.
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Free Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;