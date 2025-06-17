import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import React from 'react';
import Top from './components/Top';
import Form from './components/Form';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <div className="min-h-screen">
          <Top/>
          <Form/>
          <Pitch/>
        </div>
  </StrictMode>
);
