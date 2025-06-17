import React from 'react';
import { Shield, Check, RotateCcw } from 'lucide-react';
import { createRoot } from 'react-dom/client'
import ZapierForm from './ZapierForm'



const FormPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Checkout Is
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Leaking Sales
            </span>
            —Let's Fix It.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Book a 15-minute strategy call and discover how a branded, high-converting checkout can double your CVR.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto mb-12">
          <div>
            <div className="bg-gray-50 rounded-2xl" style={{ minHeight: '432px' }}>
                  <iframe
                  src="https://checkostyle.com/form"
                  style="width:100%;height:600px;border:none"
                />
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center space-x-8">
          <div className="flex items-center space-x-2 text-gray-700">
            <Shield className="h-5 w-5 text-green-500" />
            <span className="font-medium">100% secure</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <Check className="h-5 w-5 text-blue-500" />
            <span className="font-medium">No obligation</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <RotateCcw className="h-5 w-5 text-purple-500" />
            <span className="font-medium">7-day guarantee</span>
          </div>
        </div>
      </div>

      {/* Form Embed Script */}
    </div>
  );
};

export default FormPage;