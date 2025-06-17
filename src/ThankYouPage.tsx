import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import React from 'react';
import ThankYouPage from './components/ThankYouPage.tsx';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Form/>
    </StrictMode>
);
