// src/prerender.ts
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";    // your root component
import { vitePrerenderPlugin } from 'vite-prerender-plugin';  // ← import it here

// This function is called once for each route you list below.
export async function prerender() {
  const html = renderToString(<App />);
  return html;
}
