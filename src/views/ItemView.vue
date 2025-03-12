<template>
  <div>
    <div class="container mt-4">
      <div class="row mb-3">
        <h4 style="color:#212529; font-family: 'Arial', sans-serif;"> Siia tuleb transaction type ja itemi nimi {{item.itemName}}</h4>
        <div class="col">

          <div class="mt-3">
            Too ära kirjeldus
          </div>
          <div class="mt-1">
            Kogus
          </div>
          <div class="mt-1">
            Kategooria
          </div>
          <div class="mt-3">
            Kasutaja
          </div>
          <div class="mt-1">
            Asukoht
          </div>
          <div class="mt-1">
            Staatus
          </div>
          <div class="mt-3">
            <button type="button" class="btn btn-outline-success me-3">Muuda andmeid</button>

            <!-- @click="updateItemInfoModal" todo: andmeid saab muuta ja pilti kustutada modalis-->
            <!-- <ImageInput @event-new-image-selected="$emit('event-new-image-selected', $event)"/>-->

          </div>

        </div>
        <div class="col">
          <div class="mt-3">
            Taimepilt

            <!--            <ItemImage :image-data="item.itemImage" alt="Taimepilt">-->
            <!--            todo: tee aktiivseks ja lisa alla ItemImage ja import-->
          </div>

          <div class="mt-3">
            <button type="button" class="btn btn-success me-3">Broneerin</button>
          </div>
          <div class="mt-3">
            <button type="button" class="btn btn-success me-3">Saada teade</button>
          </div>
          <div class="mt-3">
            <button @click="navigateToHomeView" type="button" class="btn btn-success me-3">Avalehele</button>
          </div>
          <div>
            <div class="mt-3">
              <button type="button" class="btn btn-outline-success me-3">Kustuta kuulutus</button>
<!--              todo: siia Modal, mis küsib kustutamise kinnitust-->
            </div>
          </div>

        </div>
      </div>
    </div>


  </div>
</template>

<script>


import ItemService from "@/services/ItemService";
import NavigationService from "@/services/NavigationService";
import UserImage from "@/components/image/UserImage.vue";
import ItemImage from "@/components/image/ItemImage.vue";
import ImageInput from "@/components/image/ImageInput.vue";

export default {
  name: "ItemView",
  components: {ImageInput, ItemImage, UserImage},
  data() {
    return {
      item:
          {
            itemId: '',
            itemName: '',
            description: '',
            username: '',
            regionName: '',
            totalQuantity: 0,
            availableQuantity: 0,
            transactionType: '',
            itemImage: ''
          },

      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  props: {
    item: {}
  },
  methods: {

    getItem() {
      ItemService.getItemByItemId(this.item.itemId)
          .then(response => this.item = response.data)
          .catch(() => NavigationService.navigateToErrorView())
    },


    navigateToHomeView() {
      NavigationService.navigateToHomeView()
    }
  },


  beforeMount() {
    this.getItem()
  },

}
</script>
