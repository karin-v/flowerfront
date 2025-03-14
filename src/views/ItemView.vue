<template>
  <div>
    <NewMessageModal :modal-is-open="modalIsOpen"
                     :itemId="item.itemId"
                     :userId="item.userId"
                     :email:="item.userEmail"
                     @event-close-modal="closeModal"
                     @event-send-message="sendNewMessage"
    />
    <div class="container mt-4">
      <div class="row mb-3">

        <!--        todo: TransactionType puudu???-->
        <h4 style="color:#212529; font-family: 'Arial', sans-serif;"> Tehingu tüüp: {{ item.transactionType }} Toote
          nimi: {{ item.itemName }}</h4>
        <div class="col">

          <div class="mt-3">
            <div>Kirjeldus: {{ item.description }}</div>
          </div>
          <div class="mt-1">
            <div>Kogus: {{ item.availableQuantity }}</div>
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
            <button type="button" class="btn btn-outline-success me-3">Muuda andmeid</button>

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
            <button type="button" class="btn btn-success me-3" @click="openMessageModal(item.itemId, item.userId)">Saada
              teade
            </button>
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
import UpdateProfileModal from "@/components/modal/UpdateProfileModal.vue";
import NewMessageModal from "@/components/modal/NewMessageModal.vue";
import MessageService from "@/services/MessageService";

export default {
  name: "ItemView",
  components: {NewMessageModal, UpdateProfileModal, ImageInput, ItemImage, UserImage},

  data() {
    return {

      itemId: useRoute().query.itemId,
      modalIsOpen: false,
      item: {
        itemId: 0,
        itemName: '',
        category: '',
        description: '',
        username: '',
        userId: 0,
        userEmail: '',
        county: '',
        region: '',
        totalQuantity: 0,
        availableQuantity: 0,
        transactionType: '',
        itemImage: ''
      },

      // todo: testimise eesmärgil lisatud, võta see pärast ära, testimise eesmärgil, itemId peab tulema kaasa GiveAway lehelt
      // localItemId: 0,

      errorResponse: {
        message: '',
        errorCode: 0
      },
      senderId: Number(sessionStorage.getItem('userId'))
    }
  },

  methods: {

    getItem() {
      // todo: vaheta pärast tagasi this.itemId, itemId peab kaasa tulema eelmiselt lehelt
      ItemService.getItemByItemId(this.itemId)
          .then(response => this.item = response.data)
          .catch(() => NavigationService.navigateToErrorView())
    },


    navigateToHomeView() {
      NavigationService.navigateToHomeView()
    },

    openMessageModal() {
      this.modalIsOpen = true
    },
    sendNewMessage() {
      this.closeModal()
      MessageService.sendNewMessageRequest(this.userId, this.itemId, this.senderId)
          .then(response => this.handleNewMessageRequest(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleNewMessageRequest(response) {
      this.successMessage = 'Sõnum on saadetud'
      setTimeout(4000)

    },


    closeModal() {
      this.modalIsOpen = false
    },
  },

  beforeMount() {
// todo: pärast jätta välja localItemId, siin on testimise eesmärgil meetodit muudetud
//     this.localItemId = this.itemId;  // Kui itemId ei ole saadaval, määrame vaikimisi 2
    this.getItem();
  }

}
</script>
