import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    cssCodeSplit: false,
    rolldownOptions: {
      output: {
        assetFileNames: (asset) => {
          const isCss = asset.names.some((name) => name.endsWith('.css'))

          return isCss ? 'my-ui-library.css' : 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})
