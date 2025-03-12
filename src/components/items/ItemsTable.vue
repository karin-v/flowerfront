<template>
  <table class="table table-light">
    <tbody>
    <tr v-for="item in items" :key="item.itemId" >
      <td class="col col-2">
        <ItemImage  :image-data="item.itemImage"/></td>
      <td class="col col-2"><a href="#" @click="">Tootenimetus: {{ item.itemName }}</a>
      <p>Asukoht: {{ item.regionName }}</p>
        <p>Kasutaja: {{ item.username }}</p>
        <button class="btn btn-success" @click="navigateToItemView(item.itemId)">Vaata lisaks</button>

      </td>

    </tr>
    </tbody>

  </table>

</template>

<script>

import ItemImage from "@/components/image/ItemImage.vue";
import NavigationService from "@/services/NavigationService";

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
  methods:{
    navigateToItemView(itemId) {
      NavigationService.navigateToItemView(itemId)
    },
  }

}
</script>


<style scoped>

</style>