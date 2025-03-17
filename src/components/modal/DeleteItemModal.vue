<template>
  <Modal :modal-is-open="modalIsOpen" @event-close-modal="$emit('event-close-modal')">
    <!--    <div v-if="successMessage" class="alert alert-success" style="color:#212529; font-family: 'Arial', sans-serif;">-->
    <!--      {{ successMessage }}-->
    <!--    </div>-->
    <template #title>
      <div v-if="isDelete">
      </div>
      Oled kindel, et soovid kuulutuse kustutada?
    </template>
    <template #body>
      <div>
        <p><strong> {{ item.transactionType }}: {{ item.itemName }}</strong></p>
        <!--        <p>{{ item.description }}</p>-->
      </div>
    </template>

    <template #footer>
      <div class="justify-content-center">
        <button v-if="isDelete" @click="deleteItem" class="btn btn-outline-danger">Kustuta</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import NavigationService from "@/services/NavigationService";
import ItemService from "@/services/ItemService";
import Modal from '@/components/modal/Modal.vue';
import AlertSuccess from "@/components/alert/AlertSuccess.vue";

export default {
  name: "DeleteItemModal",
  components: {AlertSuccess, Modal},
  props: {
    modalIsOpen: Boolean,
    isDelete: Boolean,
    item: {},
    itemId: Number,
  },
  data() {
    return {
      successMessage: '',
    };
  },

  methods: {

    deleteItem() {
      ItemService.deleteItemRequest(this.itemId)
          .then(() => {
            this.handleDeleteItemResponse();
          })
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleDeleteItemResponse() {
      this.$emit('event-item-deleted')
      this.$emit('event-close-modal')
      setTimeout(() => {
        this.successMessage = '';
      }, 4000);
    },
  }
}
</script>
