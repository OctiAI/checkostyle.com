import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import React from 'react';
import Top from './components/Top';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <div className="min-h-screen">
          <Form/>
        </div>
  </StrictMode>
);
