<template>
  <div>
    <div class="mb-3">
      <label for="file-input" class="btn btn-outline-success">Lisa pilt</label>
      <input type="file" id="file-input" @change="handleImage" accept="image/x-png,image/jpeg,image/gif" hidden>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageInput",
  data() {
    return {
      imageDataBase64: String
    }
  },

  methods: {

    handleImage(event) {
      const selectedImage = event.target.files[0];
      this.emitBase64(selectedImage)
    },

    emitBase64(fileObject) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageDataBase64 = reader.result;
        this.$emit('event-new-image-selected', this.imageDataBase64)
      };
      reader.onerror = function (error) {
        alert(error)
      }
      reader.readAsDataURL(fileObject)
    }
  }
}
</script>
