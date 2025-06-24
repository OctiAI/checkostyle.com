// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { vitePrerenderPlugin } from "file:///home/project/node_modules/vite-prerender-plugin/src/index.js";
import { resolve } from "path";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      // 1) Where does your React app mount?
      renderTarget: "#root",
      // 2) The script that will render your <App /> to HTML:
      prerenderScript: resolve(__vite_injected_original_dirname, "src/prerender.tsx"),
      // 3) List every HTML entry you want prerendered:
      additionalPrerenderRoutes: [
        "/index",
        // maps to index.html
        "/thankyoupage",
        "/thankyoucall",
        "/bookacall",
        "/checkout"
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "index.html"),
        thankyou: resolve(__vite_injected_original_dirname, "thankyoupage.html"),
        thankyouCall: resolve(__vite_injected_original_dirname, "thankyoucall.html"),
        bookacall: resolve(__vite_injected_original_dirname, "bookacall.html"),
        checkout: resolve(__vite_injected_original_dirname, "checkout.html")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjsvLyB2aXRlLmNvbmZpZy50c1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgdml0ZVByZXJlbmRlclBsdWdpbiB9IGZyb20gJ3ZpdGUtcHJlcmVuZGVyLXBsdWdpbic7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHZpdGVQcmVyZW5kZXJQbHVnaW4oe1xuICAgICAgLy8gMSkgV2hlcmUgZG9lcyB5b3VyIFJlYWN0IGFwcCBtb3VudD9cbiAgICAgIHJlbmRlclRhcmdldDogJyNyb290JyxcblxuICAgICAgLy8gMikgVGhlIHNjcmlwdCB0aGF0IHdpbGwgcmVuZGVyIHlvdXIgPEFwcCAvPiB0byBIVE1MOlxuICAgICAgcHJlcmVuZGVyU2NyaXB0OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wcmVyZW5kZXIudHN4JyksXG5cbiAgICAgIC8vIDMpIExpc3QgZXZlcnkgSFRNTCBlbnRyeSB5b3Ugd2FudCBwcmVyZW5kZXJlZDpcbiAgICAgIGFkZGl0aW9uYWxQcmVyZW5kZXJSb3V0ZXM6IFtcbiAgICAgICAgJy9pbmRleCcsICAgICAgICAgICAgICAgICAgIC8vIG1hcHMgdG8gaW5kZXguaHRtbFxuICAgICAgICAnL3RoYW5reW91cGFnZScsXG4gICAgICAgICcvdGhhbmt5b3VjYWxsJyxcbiAgICAgICAgJy9ib29rYWNhbGwnLFxuICAgICAgICAnL2NoZWNrb3V0JyxcbiAgICAgIF0sXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFpbjogICAgICAgICByZXNvbHZlKF9fZGlybmFtZSwgJ2luZGV4Lmh0bWwnKSxcbiAgICAgICAgdGhhbmt5b3U6ICAgICByZXNvbHZlKF9fZGlybmFtZSwgJ3RoYW5reW91cGFnZS5odG1sJyksXG4gICAgICAgIHRoYW5reW91Q2FsbDogcmVzb2x2ZShfX2Rpcm5hbWUsICd0aGFua3lvdWNhbGwuaHRtbCcpLFxuICAgICAgICBib29rYWNhbGw6ICAgIHJlc29sdmUoX19kaXJuYW1lLCAnYm9va2FjYWxsLmh0bWwnKSxcbiAgICAgICAgY2hlY2tvdXQ6ICAgICByZXNvbHZlKF9fZGlybmFtZSwgJ2NoZWNrb3V0Lmh0bWwnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixTQUFTLDJCQUEyQjtBQUNwQyxTQUFTLGVBQWU7QUFKeEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sb0JBQW9CO0FBQUE7QUFBQSxNQUVsQixjQUFjO0FBQUE7QUFBQSxNQUdkLGlCQUFpQixRQUFRLGtDQUFXLG1CQUFtQjtBQUFBO0FBQUEsTUFHdkQsMkJBQTJCO0FBQUEsUUFDekI7QUFBQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsTUFBYyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxRQUM3QyxVQUFjLFFBQVEsa0NBQVcsbUJBQW1CO0FBQUEsUUFDcEQsY0FBYyxRQUFRLGtDQUFXLG1CQUFtQjtBQUFBLFFBQ3BELFdBQWMsUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxRQUNqRCxVQUFjLFFBQVEsa0NBQVcsZUFBZTtBQUFBLE1BQ2xEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
