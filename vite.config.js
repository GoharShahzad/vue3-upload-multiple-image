import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// Equivalent of webpack.config.js for library mode
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'VueUploadMultipleImage',
      fileName: format => `vue-upload-multiple-image.${format}.js`,
    },
    rollupOptions: {
      output: {
        assetFileNames: 'vue-upload-multiple-image.css', // rename CSS if you want
      },
    },
    cssCodeSplit: false, // ⬅️ this forces CSS into JS bundle
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.vue', '.json']
  },
  server: {
    port: 3000,
    open: true
  }
}))
