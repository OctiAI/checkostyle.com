import React from 'react';
import Hero from './components/Hero';
import PainProof from './components/PainProof';
import Transformation from './components/Transformation';
import Trust from './components/Trust';
import Belief from './components/Belief';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MetaPixel from './components/metaPixel';



function App() {
  return (
    <div className="min-h-screen">
      <MetaPixel />
      <Hero />
      <PainProof />
      <Transformation />
      <Trust />
      <Belief />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;