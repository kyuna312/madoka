import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: 'dist', // Ensure this matches your build script
    sourcemap: false, // Disable source maps in production for faster builds
    minify: 'terser', // Use Terser for better minification
    rollupOptions: {
      output: {
        manualChunks: undefined, // Optimize chunk splitting
      }
    }
  }
});
