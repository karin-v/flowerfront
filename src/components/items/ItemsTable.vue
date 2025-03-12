<template>
  <table class="table table-light">


    <tbody>
    <tr v-for="item in items" :key="item.itemId">
      <td class="col col-2"><a href="#" @click="NavigationService.navigateToHomeView()">Tootenimetus: {{ item.itemName }}</a>
        <br> Tootekirjeldus: {{ item.description }}
      <br> Asukoht: {{ item.regionName }}
      <br> Kasutaja: {{ item.username }}
      </td>

    </tr>
    </tbody>

  </table>

</template>

<script>
import NavigationService from "@/services/NavigationService";

export default {
  name: 'ItemsTable',
  computed: {
    NavigationService() {
      return NavigationService
    }
  },
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