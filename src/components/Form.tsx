import React from 'react';
import { Shield, Check, RotateCcw } from 'lucide-react';

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
          <div className="bg-white rounded-2xl shadow-xl border-2 border-green-300">
            <div className="bg-gray-50 rounded-2xl" style={{ minHeight: '432px' }}>
              <iframe  src="https://link.greatlakesmarketingandsoftwaresolutions.com/widget/form/kD2OmZH9OUzy6bR8FV0P"
                style={{
                  width: '100%',
                  height: '432px',
                  border: 'none',
                  borderRadius: 'rounded-2xl'
                }}
                id="inline-kD2OmZH9OUzy6bR8FV0P" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="CS - Form"
                data-height="432"
                data-layout-iframe-id="inline-kD2OmZH9OUzy6bR8FV0P"
                data-form-id="kD2OmZH9OUzy6bR8FV0P"
                title="CS - Form"
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
      <script src="https://link.greatlakesmarketingandsoftwaresolutions.com/js/form_embed.js"></script>
    </div>
  );
};

export default FormPage;