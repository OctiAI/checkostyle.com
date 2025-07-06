// src/components/MetaPixel.tsx
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    requestIdleCallback?: (cb: () => void) => void;
    _fbPixelLoaded?: boolean;
  }
}

const MetaPixel = () => {
  const hasLoaded = useRef(false);

  useEffect(() => {
    // Prevent multiple loads across component remounts
    if (hasLoaded.current || window._fbPixelLoaded) {
      return;
    }

    hasLoaded.current = true;

    const injectPixels = () => {
      // — Facebook Pixel —
      if (!window.fbq && !window._fbPixelLoaded) {
        window._fbPixelLoaded = true;

        (function (
          f: any,
          b: Document,
          e: string,
          v: string,
          n?: any,
          t?: HTMLScriptElement,
          s?: HTMLScriptElement
        ) {
          if (f.fbq) return;
          n = (f.fbq = function () {
            n.callMethod
              ? n.callMethod.apply(n, arguments)
              : n.queue.push(arguments);
          });
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = true;
          n.version = "2.0";
          n.queue = [];
          t = b.createElement(e);
          t.async = true;
          t.src = v;
          s = b.getElementsByTagName(e)[0] as HTMLScriptElement;
          s.parentNode?.insertBefore(t, s);
        })(
          window,
          document,
          "script",
          "https://connect.facebook.net/en_US/fbevents.js"
        );

        window.fbq!("init", "733564302694485");
        window.fbq!("track", "PageView");
      }
    };

    // Only inject once when component first mounts
    if (document.readyState === "complete") {
      if (window.requestIdleCallback) {
        window.requestIdleCallback(injectPixels);
      } else {
        setTimeout(injectPixels, 0);
      }
    } else {
      const onLoad = () => {
        if (window.requestIdleCallback) {
          window.requestIdleCallback(injectPixels);
        } else {
          setTimeout(injectPixels, 0);
        }
        window.removeEventListener("load", onLoad);
      };
      window.addEventListener("load", onLoad);
    }
  }, []); // Empty dependency array ensures this only runs once

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=733564302694485&ev=PageView&noscript=1"
        alt="fb pixel fallback"
      />
    </noscript>
  );
};

export default MetaPixel;
