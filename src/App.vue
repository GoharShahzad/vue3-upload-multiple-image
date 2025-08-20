<template>
  <div
    id="my-strictly-unique-vue-upload-multiple-image"
    class="flex justify-center"
  >
    <vue-upload-multiple-image
      @upload-success="uploadImageSuccess"
      @before-remove="beforeRemove"
      @edit-image="editImage"
      @data-change="dataChange"
      @limit-exceeded="limitExceeded"
    />
  </div>
</template>

<script>
import VueUploadMultipleImage from './components/VueUploadMultipleImage.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    VueUploadMultipleImage
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log('data', formData, index, fileList)
      // Example API call:
      // axios.post('/api/items/upload', formData).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove(index, done, fileList) {
      console.log('index', index, fileList)
      if (confirm("remove image")) {
        done()
      }
    },
    editImage(formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    },
    dataChange(data) {
      console.log(data)
    },
    limitExceeded(amount) {
      console.log(amount)
    }
  }
}
</script>
