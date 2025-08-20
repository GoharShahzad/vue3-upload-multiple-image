import { createApp } from 'vue'
import App from './App.vue'
import VueUploadMultipleImage from './components/VueUploadMultipleImage.vue'

if (document.querySelector('#my-strictly-unique-vue-upload-multiple-image')) {
  const app = createApp(App)

  // Register component globally
  app.component('VueUploadMultipleImage', VueUploadMultipleImage)

  // Mount the app
  app.mount('#my-strictly-unique-vue-upload-multiple-image')
}

// Export component for external use
export default VueUploadMultipleImage
