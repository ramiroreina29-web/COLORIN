
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // JSON.stringify is crucial here to ensure the object is serialized correctly 
      // into the build, preventing runtime errors in Vercel production.
      'process.env': JSON.stringify(env)
    }
  };
});
