<template>
<div>
  <img v-if="imageData.length === 0" src="../../assets/plant.png"  height="200" width="200" alt="Default thumbnail">

  <img v-else :src="imageData" class="img-thumbnail" alt="Taimepilt">

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

