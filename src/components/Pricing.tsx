<motion.div
  className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h3 className="text-2xl font-bold">Choose Your Plan</h3>
  <h4 className="text-l mb-5">ⓘ Transparent pricing tailored to every stage</h4>
  <div className="grid md:grid-cols-4 gap-8 text-left text-sm">
    <div>
      <div className="text-xl font-bold text-yellow-300 mb-2">Tester</div>
      <ul className="text-blue-100 space-y-1">
        <li>$9 One-Time</li>
        <li>30 Day Builder Access</li>
        <li>Live Support</li>
        <li>One Checkout Page (hidden)</li>
      </ul>
    </div>
    <div>
      <div className="text-xl font-bold text-yellow-300 mb-2">Pro</div>
      <ul className="text-blue-100 space-y-1">
        <li>$129/m OR $79/m (annually)</li>
        <li>5 Designed Checkouts (live)</li>
        <li>Unlimited Products</li>
        <li>A/B Split Testing</li>
        <li>Advanced Analytics (G-Analytics & Clarity)</li>
        <li>Priority Support</li>
        <li>Advanced Builder</li>
        <li>Custom CSS</li>
        <li>DFY Bonus Templates</li>
      </ul>
    </div>
    <div>
      <div className="text-xl font-bold text-yellow-300 mb-2">DFY</div>
      <ul className="text-blue-100 space-y-1">
        <li>$499 One-Time + $79/m</li>
        <li>Or FREE with $948/y plan</li>
        <li>CRO Service</li>
        <li>We build & integrate it</li>
        <li>Unlimited Revisions</li>
        <li>Satisfaction Guarantee</li>
      </ul>
    </div>
    <div>
      <div className="text-xl font-bold text-yellow-300 mb-2">Enterprise</div>
      <ul className="text-blue-100 space-y-1">
        <li>From $399/m</li>
        <li>Dedicated Success Manager</li>
        <li>Whitelabeling & Reselling</li>
        <li>Custom Integrations</li>
        <li>Slack Support (VIP)</li>
        <li>Unlimited Checkouts & Accounts</li>
      </ul>
    </div>
  </div>
</motion.div>
