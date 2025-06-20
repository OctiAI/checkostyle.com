import React, { useState } from 'react';
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
      
// const BACKEND = "http://localhost:3090";
const BACKEND = "https://api.checkostyle.com";

// Initialize Stripe.js
const stripePromise = loadStripe('pk_live_51QnPa5RoGKTuFXtOojWjniXOxD6jfuTxdXQxnbuZNE9Hq14NJb9d8KMyUS6P0IaTm5WK9zt1qD685TvFFSbe01OI00JvtkwAlO');

interface CheckoutFormProps {
  planId: string;
}

// Shared styling for all Elements
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

const CheckoutForm: React.FC<CheckoutFormProps> = ({ planId }) => {
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
      // backend might return { clientSecret } or { setupIntentClientSecret }
      const clientSecret =
        setupJson.clientSecret ?? setupJson.setupIntentClientSecret;
      if (!clientSecret) {
        throw new Error(
          'Missing SetupIntent client secret in /create-setup-intent response'
        );
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
        body: JSON.stringify({ plan: planId, name, email, setupIntentId: setupIntent.id  }),
      });
      const { success, message } = await subRes.json();
      if (!success) throw new Error(message || 'Subscription failed');

      // 4) Redirect on success
      window.location.href = '/thankyoupage.html';
    } catch (err: any) {
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

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg flex items-center justify-center space-x-2"
      >
        <Lock className="w-5 h-5" />
        <span>{loading ? 'Processing…' : 'Start My 30-Day Test →'}</span>
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
      <CheckoutForm planId={id} />
    </Elements>
  );
};
