<template>
  <div class="vue-upload-multiple-image">
    <div
      class="upload-container"
      @dragover.prevent
      @drop.prevent="onDrop"
    >
      <div class="upload-box">
        <input
          type="file"
          multiple
          accept="image/*"
          ref="fileInput"
          class="upload-input"
          @change="onFileChange"
        />
        <div class="upload-message">
          <span>{{ dragText }}</span>
          <span>{{ dropText }}</span>
          <span>{{ browseText }}</span>
        </div>
      </div>
    </div>

    <div class="image-list">
      <div
        class="image-item"
        v-for="(file, index) in files"
        :key="index"
      >
        <img
          class="image-preview"
          :src="file.dataUrl"
          alt="preview"
        />

        <div class="image-actions">
          <button type="button" class="btn-edit" @click="edit(file, index)">
            Edit
          </button>
          <button type="button" class="btn-remove" @click="beforeRemove(index)">
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueUploadMultipleImage",

  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    dragText: {
      type: String,
      default: "Drag & Drop Multiple Images"
    },
    dropText: {
      type: String,
      default: "(or) Drop Images Here"
    },
    browseText: {
      type: String,
      default: "Browse"
    },
    max: {
      type: Number,
      default: 10
    }
  },

  emits: [
    "update:modelValue",
    "upload-success",
    "before-remove",
    "edit-image",
    "data-change",
    "limit-exceeded"
  ],

  data() {
    return {
      files: []
    }
  },

  watch: {
    modelValue: {
      immediate: true,
      handler(val) {
        this.files = val || []
      }
    }
  },

  methods: {
    onFileChange(e) {
      const newFiles = Array.from(e.target.files)
      if (this.files.length + newFiles.length > this.max) {
        this.$emit("limit-exceeded", this.files.length + newFiles.length - this.max)
        return
      }

      newFiles.forEach((file, index) => {
        const reader = new FileReader()
        reader.onload = (event) => {
          const fileData = { file, dataUrl: event.target.result }
          this.files.push(fileData)
          this.$emit("upload-success", fileData, index, this.files)
          this.syncFiles()
        }
        reader.readAsDataURL(file)
      })
      e.target.value = ""
    },

    onDrop(e) {
      const droppedFiles = Array.from(e.dataTransfer.files)
      if (this.files.length + droppedFiles.length > this.max) {
        this.$emit("limit-exceeded", this.files.length + droppedFiles.length - this.max)
        return
      }

      droppedFiles.forEach((file, index) => {
        const reader = new FileReader()
        reader.onload = (event) => {
          const fileData = { file, dataUrl: event.target.result }
          this.files.push(fileData)
          this.$emit("upload-success", fileData, index, this.files)
          this.syncFiles()
        }
        reader.readAsDataURL(file)
      })
    },

    beforeRemove(index) {
      this.$emit("before-remove", index, () => {
        this.files.splice(index, 1)
        this.syncFiles()
      }, this.files)
    },

    edit(file, index) {
      this.$emit("edit-image", file, index, this.files)
    },

    syncFiles() {
      this.$emit("update:modelValue", this.files)
      this.$emit("data-change", this.files)
    }
  }
}
</script>

<style lang="css" scoped>
.text-small {
  font-size: 11px;
}
.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
}
.text-center {
  text-align: center;
}
.text-primary {
  color: #2fa3e6;
}
.display-flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.justify-content-center {
  justify-content: center;
}
.justify-content-between {
  justify-content: space-between;
}
.justify-content-end {
  justify-content: flex-end;
}
.align-items-center {
  align-items: center;
}
.full-width {
  width: 100%;
}
.full-height {
  height: 100%;
}
.cursor-pointer {
  cursor: pointer;
}
.centered {
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  position: absolute;
  display: block;
}
.image-container {
  width: 190px;
  height: 180px;
  border: 1px dashed #d6d6d6;
  border-radius: 4px;
  background-color: #fff;
}
.image-center {
  width: 100%;
  height: 100%;
}
.image-icon-drag {
  fill: #c9c8c8;
  height: 50px;
  width: 50px;
}
.drag-text {
  padding-top: 5px;
  color: #777;
  font-weight: 400;
  line-height: 1.5;
}
.browse-text {
  font-size: 86%;
  color: #206ec5;
  text-decoration: none;
}
.image-input {
  overflow: hidden;
  opacity: 0;
  top: 0;
  left: 0;
  bottom: 0;
}
.image-input label {
  display: block;
}
.drag-upload-cover {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fcfeff;
  opacity: 0.9;
  z-index: 1;
  margin: 5px;
  border: 2px dashed #268ddd;
}
.drag-upload-cover {
  font-weight: 400;
  font-size: 20px;
}
.icon-drag-drop {
  height: 50px;
  width: 50px;
  fill: #2fa3e6;
}
.drop-text-here {
  margin: 0;
  line-height: 1.5;
}
.display-none {
  display: none;
}

/* list images*/
.image-list {
  border: 1px solid #d6d6d6;
}
.preview-image {
  height: 140px;
  padding: 5px;
  border-radius: 15px;
  box-sizing: border-box;
}
.image-overlay {
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  border-radius: 5px;
  opacity: 0;
  transition: all 0.3s ease-in-out 0s;
}
.image-overlay-details {
  position: absolute;
  z-index: 11;
  opacity: 0;
  transform: translate(0, -50%);
  top: 50%;
}
.icon-overlay {
  width: 40px;
  height: 40px;
  fill: #fff;
}
.preview-image:hover .image-overlay,
.preview-image:hover .image-overlay-details {
  opacity: 1;
}
.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}
.show-img {
  max-height: 100px;
  max-width: 140px;
  display: block;
  vertical-align: middle;
}
/*image bottom*/
.image-bottom {
  bottom: 0;
  left: 0;
  height: 40px;
  padding: 5px 10px;
  box-sizing: border-box;
}
.image-primary {
  border-radius: 4px;
  background-color: #e3edf7;
  padding: 3px 7px;
  font-size: 11px;
  margin-right: 5px;
}
.image-icon-primary {
  width: 10px;
  height: 10px;
  margin-right: 2px;
}
.image-icon-delete {
  height: 14px;
  width: 14px;
  fill: #222;
}
.image-edit {
  margin-right: 10px;
}
.image-icon-edit {
  height: 14px;
  width: 14px;
  fill: #222;
}
.image-list-container {
  max-width: 190px;
  min-height: 50px;
  margin-top: 10px;
}
.image-list-container .image-list-item {
  height: 32px;
  width: 32px;
  border-radius: 4px;
  border: 1px solid #d6d6d6;
}
.image-list-container .image-list-item:not(:last-child) {
  margin-right: 5px;
  margin-bottom: 5px;
}
.image-list-container .image-list-item .show-img {
  max-width: 25px;
  max-height: 17px;
}
.image-list-container .image-highlight {
  border: 1px solid #2fa3e7;
}
.add-image-svg {
  width: 12px;
  height: 12px;
  fill: #222;
}
.input-add-image {
  overflow: hidden;
  opacity: 0;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 11;
}
.input-add-image label {
  display: block;
}
.image-icon-info {
  width: 14px;
  height: 14px;
  fill: #222;
}
.mark-text-primary {
  color: #034694;
}
.popper-custom {
  background: #000;
  padding: 10px;
  border: none;
  box-shadow: none;
  color: white;
  text-align: left;
  font-size: 12px;
}
</style>
<style lang="css">
.popper-custom .popper__arrow {
  border-color: #000 transparent transparent transparent !important;
}
</style>
