import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.API_QUOTE_URL': JSON.stringify(env.API_QUOTE_URL),
      'process.env.API_QUOTE_KEY': JSON.stringify(env.API_QUOTE_KEY),
      'process.env.API_MW_URL': JSON.stringify(env.API_MW_URL),
      'process.env.API_MW_KEY': JSON.stringify(env.API_MW_KEY)
  },
  }
  
});
