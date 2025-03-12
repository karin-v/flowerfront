<template>
  <table class="table table-light">
    <tbody>
    <tr v-for="item in items" :key="item.itemId" >
      <td class="col col-2">
        <ItemImage  :image-data="item.itemImage"/></td>
      <td class="col col-2"><a href="#" @click="">Tootenimetus: {{ item.itemName }}</a>
      <p>Asukoht: {{ item.regionName }}</p>
        <p>Kasutaja: {{ item.username }}</p>
        <button class="btn btn-success">Vaata lisaks</button>

      </td>

    </tr>
    </tbody>

  </table>

</template>

<script>

import ItemImage from "@/components/image/ItemImage.vue";

export default {
  name: 'ItemsTable',
  components: {ItemImage},
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  },

}
</script>


<style scoped>

</style>