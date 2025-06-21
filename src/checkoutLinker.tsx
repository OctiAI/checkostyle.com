import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import CheckoutPage from './components/checkout';
import MetaPixel from './components/metaPixel';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CheckoutPage />
  </StrictMode>
);

export default App;