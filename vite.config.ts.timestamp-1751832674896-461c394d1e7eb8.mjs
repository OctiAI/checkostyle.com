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
        "/thankyoupage",
        "/thankyoucall",
        "/bookacall",
        "/checkout"
      ]
    })
  ],
  build: {
    rollupOptions: {
      // your multiple HTML entrypoints
      input: {
        main: resolve(__vite_injected_original_dirname, "index.html"),
        thankyou: resolve(__vite_injected_original_dirname, "thankyoupage.html"),
        thankyouCall: resolve(__vite_injected_original_dirname, "thankyoucall.html"),
        bookacall: resolve(__vite_injected_original_dirname, "bookacall.html"),
        checkout: resolve(__vite_injected_original_dirname, "checkout.html")
      },
      output: {
        // pull all 3rd-party deps into a single vendor chunk
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjsvLyB2aXRlLmNvbmZpZy50c1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgdml0ZVByZXJlbmRlclBsdWdpbiB9IGZyb20gJ3ZpdGUtcHJlcmVuZGVyLXBsdWdpbic7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHZpdGVQcmVyZW5kZXJQbHVnaW4oe1xuICAgICAgLy8gMSkgV2hlcmUgZG9lcyB5b3VyIFJlYWN0IGFwcCBtb3VudD9cbiAgICAgIHJlbmRlclRhcmdldDogJyNyb290JyxcblxuICAgICAgLy8gMikgVGhlIHNjcmlwdCB0aGF0IHdpbGwgcmVuZGVyIHlvdXIgPEFwcCAvPiB0byBIVE1MOlxuICAgICAgcHJlcmVuZGVyU2NyaXB0OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wcmVyZW5kZXIudHN4JyksXG5cbiAgICAgIC8vIDMpIExpc3QgZXZlcnkgSFRNTCBlbnRyeSB5b3Ugd2FudCBwcmVyZW5kZXJlZDpcbiAgICAgIGFkZGl0aW9uYWxQcmVyZW5kZXJSb3V0ZXM6IFtcbiAgICAgICAgJy9pbmRleCcsXG4gICAgICAgICcvdGhhbmt5b3VwYWdlJyxcbiAgICAgICAgJy90aGFua3lvdWNhbGwnLFxuICAgICAgICAnL2Jvb2thY2FsbCcsXG4gICAgICAgICcvY2hlY2tvdXQnLFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvLyB5b3VyIG11bHRpcGxlIEhUTUwgZW50cnlwb2ludHNcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIG1haW46ICAgICAgICAgcmVzb2x2ZShfX2Rpcm5hbWUsICdpbmRleC5odG1sJyksXG4gICAgICAgIHRoYW5reW91OiAgICAgcmVzb2x2ZShfX2Rpcm5hbWUsICd0aGFua3lvdXBhZ2UuaHRtbCcpLFxuICAgICAgICB0aGFua3lvdUNhbGw6IHJlc29sdmUoX19kaXJuYW1lLCAndGhhbmt5b3VjYWxsLmh0bWwnKSxcbiAgICAgICAgYm9va2FjYWxsOiAgICByZXNvbHZlKF9fZGlybmFtZSwgJ2Jvb2thY2FsbC5odG1sJyksXG4gICAgICAgIGNoZWNrb3V0OiAgICAgcmVzb2x2ZShfX2Rpcm5hbWUsICdjaGVja291dC5odG1sJyksXG4gICAgICB9LFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIHB1bGwgYWxsIDNyZC1wYXJ0eSBkZXBzIGludG8gYSBzaW5nbGUgdmVuZG9yIGNodW5rXG4gICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgIHJldHVybiAndmVuZG9yJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixTQUFTLDJCQUEyQjtBQUNwQyxTQUFTLGVBQWU7QUFKeEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sb0JBQW9CO0FBQUE7QUFBQSxNQUVsQixjQUFjO0FBQUE7QUFBQSxNQUdkLGlCQUFpQixRQUFRLGtDQUFXLG1CQUFtQjtBQUFBO0FBQUEsTUFHdkQsMkJBQTJCO0FBQUEsUUFDekI7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQTtBQUFBLE1BRWIsT0FBTztBQUFBLFFBQ0wsTUFBYyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxRQUM3QyxVQUFjLFFBQVEsa0NBQVcsbUJBQW1CO0FBQUEsUUFDcEQsY0FBYyxRQUFRLGtDQUFXLG1CQUFtQjtBQUFBLFFBQ3BELFdBQWMsUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxRQUNqRCxVQUFjLFFBQVEsa0NBQVcsZUFBZTtBQUFBLE1BQ2xEO0FBQUEsTUFDQSxRQUFRO0FBQUE7QUFBQSxRQUVOLGFBQWEsSUFBSTtBQUNmLGNBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixtQkFBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
