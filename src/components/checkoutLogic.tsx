// checkoutLogic.tsx
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { Lock, CreditCard } from 'lucide-react';

// Backend base URL
const BACKEND = "https://api.checkostyle.com";
// const BACKEND = "http://localhost:3090";
// Initialize Stripe.js once
const stripePromise = loadStripe('pk_test_51QnPa5RoGKTuFXtOjUSXFwNJ0DBI4WCGvmc7F1Mi09g3RQ578YBgqDJYagleBSna82gWxLha31VXqc9HXHNGwlQ000lnTEuagR');

interface FeatureItem {
  icon: string;
  heading: string;
  text?: string;
}
interface Footing_points {
  icon: string;
  heading: string;
  text?: string;
}
interface CartDisplay {
  headline: string;
  headline_span: string;
  sub_headline?: string;
  main_label?: string;
  features: FeatureItem[];
  footing?: string;
  footing_points: Footing_points[];
}
interface PlanData {
  cartItem_1?: { unit_amount: number; payment_interval: string; /* ...other if needed */ };
  cartItem_2?: { unit_amount: number; payment_interval: string; /* ... */ };
  // ...potentially more cartItem_X
  cart_fields: string[];
  cart_display: CartDisplay;
  // other fields returned by backend, e.g. cart_description, auth, etc.
  [key: string]: any;
}

// Hook to fetch plan data (including our structured cart_display) from backend
export function useCartData(planId: string) {
  const [data, setData] = useState<PlanData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!planId) {
      setData(null);
      setLoading(false);
      return;
    }
    let isMounted = true;
    setLoading(true);
    setError(null);

    // POST to backend endpoint that returns the plan data, including cart_display
    fetch(`${BACKEND}/create-checkout-session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        itemID: planId,
        auth_code: 'check_admin__auth_code'
      }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const errText = await res.text();
          throw new Error(`Error ${res.status}: ${errText}`);
        }
        return res.json();
      })
      .then((json) => {
        // Expect json to be the planData object as in checkoutMap[planId]
        if (isMounted) {
          setData(json as PlanData);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error("useCartData fetch error:", err);
          setError(err.message || 'Failed to load plan data');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [planId]);

  return { data, loading, error };
}

// Shared styling for Stripe Elements
const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#333',
      '::placeholder': { color: '#999' },
      iconColor: '#666'
    },
    invalid: {
      color: '#e5424d',
      iconColor: '#e5424d'
    }
  }
};

interface CheckoutFormProps {
  planId: string;
  cart_fields?: string[]; // optional: if you want to render dynamic extra fields
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ planId, cart_fields }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [error, setError]     = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setError(null);

    try {
      // 1) Create SetupIntent
      const setupRes = await fetch(`${BACKEND}/create-setup-intent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });
      const setupJson = await setupRes.json();
      const clientSecret =
        setupJson.clientSecret ?? setupJson.setupIntentClientSecret;
      if (!clientSecret) {
        throw new Error('Missing SetupIntent client secret in response');
      }
      if (setupJson.error) {
        throw new Error(setupJson.error);
      }
      // 2) Confirm card setup
      const cardNumberEl = elements.getElement(CardNumberElement)!;
      const { setupIntent, error: confirmError } = await stripe.confirmCardSetup(
        clientSecret,
        {
          payment_method: {
            card: cardNumberEl,
            billing_details: { name, email },
          },
        }
      );
      if (confirmError) throw confirmError;

      // 3) Create subscription / checkout session
      const subRes = await fetch(`${BACKEND}/dynamic-checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: planId,
          name,
          email,
          setupIntentId: setupIntent.id
        }),
      });
      const { success, message } = await subRes.json();
      if (!success) throw new Error(message || 'Subscription failed');

      // 4) Redirect on success
      window.location.href = '/thankyoupage.html';
    } catch (err: any) {
      console.error("CheckoutForm error:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name on Card */}
      <div>
        <label htmlFor="cardholder-name" className="block text-sm font-medium text-gray-700 mb-2">
          Name on Card
        </label>
        <input
          id="cardholder-name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          placeholder="Enter your full name"
        />
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          placeholder="Enter your email"
        />
      </div>

      {/* Additional dynamic fields if you wish */}
      {cart_fields && cart_fields.length > 0 && (
        <div>
          {cart_fields.map((field) => {
            // Customize rendering based on field name pattern. For example:
            if (field === 'CUSTOM__how-did-you-learn-about-us') {
              return (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-2">
                    How did you learn about us?
                  </label>
                  <input
                    id={field}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    placeholder="e.g. Google, friend, etc."
                  />
                </div>
              );
            }
            // Add other custom fields as needed; otherwise skip or render generically.
            return null;
          })}
        </div>
      )}

      {/* Card Details */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Card Details</label>
        <div className="space-y-3">
          {/* Card Number */}
          <div className="relative">
            <CardNumberElement
              options={ELEMENT_OPTIONS}
              className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus-within:ring-2 focus-within:ring-green-500"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
              <CreditCard className="w-5 h-5" />
            </div>
          </div>
          {/* Expiry + CVC */}
          <div className="grid grid-cols-2 gap-3">
            <CardExpiryElement
              options={ELEMENT_OPTIONS}
              className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus-within:ring-2 focus-within:ring-green-500"
            />
            <CardCvcElement
              options={ELEMENT_OPTIONS}
              className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus-within:ring-2 focus-within:ring-green-500"
            />
          </div>
        </div>
        {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
      </div>
      
     <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        {(() => {
          switch (window.location.search.replace('?', '')) {
            case 'CS_checko_tester_m':
              return(   
                <div className="flex justify-between items-center">
                 <span>CheckoStyle Tester Plan</span>;  
                <span className="font-bold text-green-600">$9.00</span>
              </div>)

            case 'CS_checko_pro_m':
            case 'CS_checko_pro_y':
               return(   
                <div className="flex justify-between items-center">
                 <span>CheckoStyle Pro Plan</span>;  
                <span className="font-bold text-green-600">$129.00</span>
              </div>)            
            case 'CS_checko_dfy_m':
            case 'CS_checko_dfy_y':
               return(   
                <div className="flex justify-between items-center">
                 <span>CheckoStyle DFY Setup Fee</span>;  
                  <span className="font-bold text-green-600">$499.00</span>
                 <span>CheckoStyle Pro Plan</span>;  
                <span className="font-bold text-green-600">$129.00</span>
              </div>)   
            case 'CS_checko_enterprise_m':
              return <span>Book My Enterprise Call →</span>;
         }
        })()}
          
   <div className="flex justify-between items-center">
                 <span>CheckoStyle DFY Setup Fee</span>;  
                  <span className="font-bold text-green-600">$499.00</span>
                 <span>CheckoStyle Pro Plan</span>;  
                <span className="font-bold text-green-600">$129.00</span>
              </div>
        </div>
      
      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg flex items-center justify-center space-x-2"
      >
        <Lock className="w-5 h-5" />
        {(() => {
          switch (window.location.search.replace('?', '')) {
            case 'CS_checko_tester_m':
              return <span>Start My 30-Day Test →</span>;  
            case 'CS_checko_pro_m':
            case 'CS_checko_pro_y':
              return <span>Start My Pro Plan →</span>;
            case 'CS_checko_dfy_m':
            case 'CS_checko_dfy_y':
              return <span>Order DFY Service →</span>;
            case 'CS_checko_enterprise_m':
              return <span>Book My Enterprise Call →</span>;
          
          }
        })()}
      </button>

      {/* Terms */}
      <p className="text-xs text-gray-500 text-center">
        By clicking, you agree to our{' '}
        <a href="#" className="text-green-600 underline">Terms of Service</a> &{' '}
        <a href="#" className="text-green-600 underline">Privacy Policy</a>.
      </p>
    </form>
  );
};

// Wrap with <Elements> so it mounts only after Stripe.js loads
export const CheckoutPageWrapper: React.FC<{ planId?: string }> = ({ planId }) => {
  const id = planId ?? window.location.search.replace('?', '');
  return (
    <Elements stripe={stripePromise}>
      {/* If desired, you can also call useCartData here and pass cart_fields into CheckoutForm */}
      <CheckoutForm planId={id} />
    </Elements>
  );
};
