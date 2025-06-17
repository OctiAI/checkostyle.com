import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import React from 'react';
import Form from './components/Form';



import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ThankYouCall from './ThankYouCall';
import ThankYouPayment from './ThankYouPayment';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThankYouCall />
  </StrictMode>
);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <div className="min-h-screen">
          <Form/>
        </div>
  </StrictMode>
);
