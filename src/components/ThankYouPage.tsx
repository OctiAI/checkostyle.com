import React, { useEffect, useState } from 'react'
import { CheckCircle, ShieldCheck, Crown } from 'lucide-react'

export default function ThankYouPage() {
  const [showSale, setShowSale] = useState(false)

  // after 1s, cross out 499 and fade in 249
  useEffect(() => {
    const t = setTimeout(() => setShowSale(true), 1000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white border border-orange-300 rounded-2xl max-w-md w-full p-6 space-y-6 shadow-lg">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Thank You, You’re In!</h1>
          {/* spacer */}
          <div className="h-4" />
          <p className="text-gray-600">
            Welcome aboard! You’ve taken a huge step toward a checkout that finally converts. While
            you explore the builder, grab this once-in-a-lifetime upgrade…
          </p>
        </div>

        {/* Animated Price */}
        <div className="text-center">
          <div
            className={`text-lg font-medium text-gray-500 transition-opacity duration-500 ${
              showSale ? 'opacity-50 line-through' : 'opacity-100'
            }`}
          >
            $499
          </div>
          <div
            className={`mt-1 text-4xl font-extrabold text-orange-600 transition-opacity duration-500 ${
              showSale ? 'opacity-100' : 'opacity-0'
            }`}
          >
            $249
          </div>
        </div>

        {/* Your existing form or CTA button */}
        <form className="space-y-4">
          {/* … */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-400 to-red-500 text-white font-medium"
          >
            Upgrade to DFY for $249 →
          </button>
        </form>

        {/* Trust-signal icons only, no sub-text */}
        <div className="flex justify-around mt-6">
          <div className="flex flex-col items-center">
            <CheckCircle className="w-6 h-6" />
            <span className="mt-2 font-medium text-gray-700">100% Stripe-secure</span>
          </div>
          <div className="flex flex-col items-center">
            {/* enlarged crown */}
            <Crown className="w-8 h-8" />
            <span className="mt-2 font-medium text-gray-700">7-day money-back</span>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-6 h-6" />
            <span className="mt-2 font-medium text-gray-700">Priority support</span>
          </div>
        </div>

        {/* Replacement “refund” line */}
        <div className="mt-8 text-center text-gray-600 italic">
          Not thrilled? Instant refund, no questions asked.
        </div>

        {/* Final reminders, un-boxed */}
        <div className="mt-4 text-center space-y-2 text-gray-500">
          <p>Last reminder: Take advantage of this offer before you close the page—or it’s gone… forever.</p>
          <p>Looking forward to your success 🚀</p>
        </div>
      </div>
    </div>
  )
}
