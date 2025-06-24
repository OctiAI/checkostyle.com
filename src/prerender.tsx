// src/prerender.tsx
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router';

interface Context {
  route: string;
}

/**
 * This named export **must** be called `prerender`.
 * Vite Prerender Plugin will call it once per route.
 */
export async function prerender({ route }: Context) {
  // Wrap App in a StaticRouter so your <Route> logic works
  return renderToString(
    <StaticRouter location={route}>
      <App />
    </StaticRouter>
  );
}
