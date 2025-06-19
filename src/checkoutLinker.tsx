import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import CheckoutPage from './components/checkout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CheckoutPage />
  </StrictMode>
);

export default App;