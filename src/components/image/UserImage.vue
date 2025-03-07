<template>
<div>
  <img v-if="imageData.length === 0" src="../../assets/profilePictureDefault.webp"  height="250" width="250"
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

