import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/fonts";
          @import "./src/scss/global";
          @import "./src/scss/colors";
          @import "./src/scss/transitions";
        `,
      },
    },
  },

  build: {
    outDir: './docs',
  },

   resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
