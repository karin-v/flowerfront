<template>
<div>
  <img v-if="!imageData || imageData.length === 0" src="../../assets/plant.png"  :style="{width: '175px', height: '175px', objectFit: 'cover'}" alt="Default thumbnail">

  <img v-else :src="imageData" :style="{width: '175px', height: '175px', objectFit: 'cover'}" class="img-thumbnail" alt="Taimepilt">

</div>
</template>

<script>
export default {
  name: "ItemImage",
  props: {
    imageData: String
  }
}
</script>

