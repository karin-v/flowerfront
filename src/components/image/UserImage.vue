<template>
  <div>
    <img v-if="imageData.length === 0" src="../../assets/profilePictureDefault.webp" style="width: 175px; height: 175px;"
       alt="Profiilipilt"/>
    <img v-else :src="imageData" class="img-thumbnail" alt="Profiilipilt">
  </div>
</template>

<script>
export default {
  name: "UserImage",
  props: {
    imageData: String
  }
}
</script>

