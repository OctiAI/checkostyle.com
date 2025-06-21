import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import React from 'react';
import ThankYouCall from './components/ThankYouCall.tsx';
import MetaPixel from './components/metaPixel';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <MetaPixel />
      <ThankYouCall/>
    </StrictMode>
);
