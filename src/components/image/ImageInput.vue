<template>
  <div mb-3>
    <div class="mb-3">
      <input type="file" @change="handleImage" accept="image/x-png,image/jpeg,image/gif">
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
        this.$emit('event-user-image-selected', this.imageDataBase64)
      };
      reader.onerror = function (error) {
        alert(error)
      }
      reader.readAsDataURL(fileObject)
    }
  }
}
</script>
