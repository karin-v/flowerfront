<template>
  <div>
    <Modal :modal-is-open="modalIsOpen" @event-close-modal="$emit('event-close-modal')">
      <template #title>
        Muuda kuulutuse andmeid
      </template>
      <template #body>
        <div>

          <div style="width: 175px">
            <ItemImage :image-data="item.itemImage" alt="Taimepilt"/>
            <ImageInput @event-new-image-selected="$emit('event-new-image-selected', $event)"/>

          </div>

        </div>
        <div>
          <div>
            <label class="form-text">Toote nimi:</label>
          </div>
          <div>
            <input type="text"
                   :value="item.itemName"
                   @input="$emit('event-update-itemname', $event.target.value)"
            >
          </div>
          <div>
            <label class="form-text">Kirjeldus:</label>
          </div>
          <div>
            <input type="text"
                   :value="item.description"
                   @input="$emit('event-update-description', $event.target.value)"
            >
          </div>
          <div>
            <label class="form-text">Kogus:</label>
          </div>
          <div>
            <input type="text"
                   :value="item.totalQuantity"
                   @input="$emit('event-update-total-quantity', $event.target.value)"
            >
          </div>
          <div>
            <label class="form-text">Kategooria:</label>
          </div>
          <div>
            <input type="text"
                   :value="item.category"
                   @input="$emit('event-update-category', $event.target.value)"
            >
          </div>
        </div>


      </template>

      <template #footer>
        <button type="button" class="btn btn-success me-2" @click="$emit('event-update-item')">Salvesta</button>
      </template>

    </Modal>

  </div>
</template>

<script>
import ItemImage from "@/components/image/ItemImage.vue";
import ImageInput from "@/components/image/ImageInput.vue";
import UserImage from "@/components/image/UserImage.vue";
import Modal from "@/components/modal/Modal.vue";

export default {
  name: "UpdateProfileModal",
  components: {UserImage, ImageInput, ItemImage, Modal},
  props: {
    item: {},
    modalIsOpen: Boolean,
  },
}
</script>
