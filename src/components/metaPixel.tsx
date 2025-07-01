// src/components/MetaPixel.tsx
import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
    requestIdleCallback?: (cb: () => void) => void;
    _fbPixelLoaded?: boolean;
    _clarityLoaded?: boolean;
  }
}

const MetaPixel = () => {
  useEffect(() => {
    // Prevent multiple loads
    if (window._fbPixelLoaded && window._clarityLoaded) {
      return;
    }

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

      // — Microsoft Clarity —
      if (!window.clarity && !window._clarityLoaded) {
        window._clarityLoaded = true;
        
        (function (
          c: any,
          l: Document,
          a: string,
          r: string,
          i: string,
          t?: HTMLScriptElement,
          y?: Element
        ) {
          c[a] = c[a] || function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
          t = l.createElement(r);
          t.async = true;
          t.src = "https://www.clarity.ms/tag/" + i;
          y = l.getElementsByTagName(r)[0];
          y.parentNode?.insertBefore(t, y);
        })(window, document, "clarity", "script", "s45r7e1qd6");
      }
    };

    // Use a small delay to prevent conflicts with initial page load
    const timer = setTimeout(() => {
      if (document.readyState === "complete") {
        if (window.requestIdleCallback) {
          window.requestIdleCallback(injectPixels);
        } else {
          injectPixels();
        }
      } else {
        const onLoad = () => {
          if (window.requestIdleCallback) {
            window.requestIdleCallback(injectPixels);
          } else {
            injectPixels();
          }
          window.removeEventListener("load", onLoad);
        };
        window.addEventListener("load", onLoad);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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