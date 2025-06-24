// src/prerender.ts
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App"; // or wherever your root-level component lives

// This function will be called once per route.
export async function prerender() {
  // Optional: fetch data here based on route if you pass info in later
  const html = renderToString(<App />);
  return html;
}
