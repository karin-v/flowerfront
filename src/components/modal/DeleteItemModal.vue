
<template>
  <Modal :modal-is-open="modalIsOpen" @event-close-modal="$emit('event-close-modal')">
    <template #title>
      <div v-if="isDelete">
        Oled kindel, et soovid kuulutuse kustutada?
      </div>
      <div v-else>
<!--        todo: kas siia vaja midagi kirjutada??-->
      </div>
    </template>
    <template #footer>
      <button @click="deleteItem" class="btn btn-outline-danger">Kustuta</button>
    </template>
  </Modal>
</template>

<script>
import NavigationService from "@/services/NavigationService";
import ItemService from "@/services/ItemService";
import Modal from '@/components/modal/Modal.vue';

export default {
  name: "DeleteItemModal",
  components: {Modal},
  props: {
    modalIsOpen: Boolean,
    item: {},
    itemId: Number
  },

  methods: {

    deleteItem() {
      ItemService.deleteItemRequest(this.itemId)
          .then(() => this.handleDeleteItemResponse())
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleDeleteItemResponse() {
      this.$emit('event-item-deleted')
      this.$emit('event-close-item-modal')
    }
  }
}
</script>
