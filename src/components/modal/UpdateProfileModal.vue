<template>
  <div>
    <Modal :modal-is-open="modalIsOpen" @event-close-modal="$emit('event-close-modal')">
      <template #title>
        Muuda kasutaja andmeid
      </template>
      <template #body>
        <div>

          <div class="container" style="width: 175px">
            <UserImage :image-data="user.userImage" alt="Profiilipilt"/>
           <ImageInput @event-new-image-selected="$emit('event-new-image-selected', $event)"/>

          </div>

        </div>
        <div>
          <div>
            <label>Sisesta uus kasutajanimi:</label>
          </div>
          <div>
            <input type="text"
                   :value="user.username"
                   @input="$emit('event-update-username', $event.target.value)"
            >
          </div>
          <div>
            <label class="form-text">Sisesta uus e-maili aadress:</label>
          </div>
          <div>
            <input type="text"
                   :value="user.email"
                   @input="$emit('event-update-email', $event.target.value)"
            >
          </div>
        </div>


      </template>

      <template #footer>
        <button type="button" class="btn btn-success me-2" @click="$emit('event-update-user')">Salvesta</button>
      </template>

    </Modal>

  </div>
</template>

<script>
import UserImage from "@/components/image/UserImage.vue";
import Modal from "@/components/modal/Modal.vue";
import ImageInput from "@/components/image/ImageInput.vue";

export default {
  name: "UpdateProfileModal",
  components: {ImageInput, Modal, UserImage},
  props: {
    user: {},
    modalIsOpen: Boolean,
  },
}


</script>


