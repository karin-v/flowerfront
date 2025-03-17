<template>
  <div>
    <img v-if="!imageData || imageData.length === 0" src="../../assets/profilePictureDefault.webp"
         :style="{width: '175px', height: '175px', objectFit: 'cover'}"
         alt="Profiilipilt"/>
    <img v-else :src="imageData" :style="{width: '175px', height: '175px', objectFit: 'cover'}" class="img-thumbnail"
         alt="Profiilipilt"/>
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

