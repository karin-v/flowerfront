<template>
  <div>

    <UpdateItemModal :modal-is-open="modalIsOpen"
                     :item="item"
                     @event-close-modal="closeModal"
                     @event-update-item="updateItem"
                     @event-update-transactiontype = "setItemTransactionType"
                     @event-update-description = "setItemDescription"
                     @event-update-itemname = "setItemName"
                     @event-update-category = "setItemCategory"
                     @event-update-total-quantity = "setItemTotalQuantity"


    />
    <div class="container mt-4">
      <div class="row mb-3">

        <!--        todo: TransactionType puudu???-->
        <h4 style="color:#212529; font-family: 'Arial', sans-serif;"> {{ item.transactionType }}: {{
            item.itemName
          }}</h4>
        <div class="col">

          <div class="mt-3">
            <div>Kirjeldus: {{ item.description }}</div>
          </div>
          <div class="mt-1">
            <div>Kogus: {{ item.totalQuantity }}</div>
          </div>
          <div class="mt-1">
            <div>Kategooria: {{ item.category }}</div>
          </div>
          <div class="mt-3">
            <div>Kasutaja: {{ item.username }}</div>
          </div>
          <div class="mt-1">
            <div>Asukoht: {{ item.county }}, {{ item.region }}</div>
          </div>
          <div class="mt-1">
            Staatus
          </div>
          <div class="mt-3">
            <button @click="openItemInfoModal" type="button" class="btn btn-outline-success me-3">Muuda andmeid</button>

            <!-- @click="updateItemInfoModal" todo: andmeid saab muuta ja pilti kustutada modalis-->
            <!-- <ImageInput @event-new-image-selected="$emit('event-new-image-selected', $event)"/>-->

          </div>

        </div>
        <div class="col">
          <div class="mt-3">


            <ItemImage :image-data="item.itemImage" alt="Taimepilt"/>


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
              <button type="button" class="btn btn-secondary me-3">Kustuta kuulutus</button>
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
import {useRoute} from "vue-router";
import UpdateItemModal from "@/components/modal/UpdateItemModal.vue";
import UpdateProfileModal from "@/components/modal/UpdateProfileModal.vue";

export default {
  name: "ItemView",
  components: {UpdateProfileModal, ImageInput, ItemImage, UserImage, UpdateItemModal},
  data() {
    return {
      modalIsOpen: false,
      itemId: useRoute().query.itemId,
      item: {
        itemId: 0,
        itemName: '',
        category: '',
        description: '',
        username: '',
        county: '',
        region: '',
        totalQuantity: 0,
        availableQuantity: 0,
        transactionType: '',
        itemImage: ''
      },
      successMessage: '',
      errorMessage: '',

      // todo: testimise eesmärgil lisatud, võta see pärast ära, testimise eesmärgil, itemId peab tulema kaasa GiveAway lehelt
      // localItemId: 0,

      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },

  methods: {

    getItem() {
      // todo: vaheta pärast tagasi this.itemId, itemId peab kaasa tulema eelmiselt lehelt
      ItemService.getItemByItemId(this.itemId)
          .then(response => this.item = response.data)
          .catch(() => NavigationService.navigateToErrorView())
    },

    setItemTransactionType(transactionType) {
      this.item.transactionType = transactionType
    },

    setItemDescription(description) {
      this.item.description = description
    },

    setItemName(itemName) {
      this.item.itemName = itemName
    },

    setItemCategory(category) {
      this.item.category = category
    },

    setItemTotalQuantity(totalQuantity) {
      this.item.totalQuantity = totalQuantity
    },


    updateItem() {
      this.closeModal()
      ItemService.updateItem(this.itemId, this.item)
          .then(response => this.handleUpdateItemResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    openItemInfoModal() {
      this.modalIsOpen = true
    },

    closeModal() {
      this.modalIsOpen = false
    },

    navigateToHomeView() {
      NavigationService.navigateToHomeView()
    },

    handleUpdateItemResponse(response) {
      this.successMessage = 'Kuulutuse andmed on muudetud'
      setTimeout(this.resetAllMessages, 4000)

    }
  },

  beforeMount() {
// todo: pärast jätta välja localItemId, siin on testimise eesmärgil meetodit muudetud
//     this.localItemId = this.itemId;  // Kui itemId ei ole saadaval, määrame vaikimisi 2
    this.getItem();
  }

}
</script>
