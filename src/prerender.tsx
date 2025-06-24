// src/prerender.ts
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";    // your root component
import { vitePrerenderPlugin } from 'vite-prerender-plugin';  // ← import it here


/**
 * This default-exported function will be called
 * once for each route you listed in vite.config.ts
 */
export default function prerender() {
  // Simply render your <App /> to a string
  return renderToString(<App />);
}
