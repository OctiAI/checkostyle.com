import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainProof from './components/PainProof';
import Transformation from './components/Transformation';
import Trust from './components/Trust';
import Belief from './components/Belief';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
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