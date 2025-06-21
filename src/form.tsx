import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import React from 'react';
import Form from './components/Form';
import MetaPixel from './components/metaPixel';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <MetaPixel />
      <Form/>
    </StrictMode>
);
