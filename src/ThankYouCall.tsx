import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import React from 'react';
import Form from './components/Form';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Form/>
    </StrictMode>
);
