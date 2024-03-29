import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
   replace({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
          'process.env.VITE_NASA_API': JSON.stringify(process.env.VITE_NASA_API),
          'process.env': JSON.stringify(process.env),
        }
      ),
    ],
  }
)
