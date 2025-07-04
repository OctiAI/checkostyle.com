import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import MetaPixel from './components/metaPixel';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MetaPixel />
    <App />
  </StrictMode>
);
