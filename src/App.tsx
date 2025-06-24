// src/App.tsx
import React, { Suspense } from 'react';
import Hero from './components/Hero';

// below-the-fold sections only load after Hero paints
const PainProof      = React.lazy(() => import('./components/PainProof'));
const Transformation = React.lazy(() => import('./components/Transformation'));
const Trust          = React.lazy(() => import('./components/Trust'));
const Belief         = React.lazy(() => import('./components/Belief'));
const Pricing        = React.lazy(() => import('./components/Pricing'));
const FAQ            = React.lazy(() => import('./components/FAQ'));
const FinalCTA       = React.lazy(() => import('./components/FinalCTA'));
const Footer         = React.lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />

      <Suspense fallback={<div className="py-20 text-center">Loading…</div>}>
        <PainProof />
        <Transformation />
        <Trust />
        <Belief />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </Suspense>
    </div>
  );
}


export default App;