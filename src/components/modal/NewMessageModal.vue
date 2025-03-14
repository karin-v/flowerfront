

<template>
  <Modal :modal-is-open="modalIsOpen" @event-close-modal="$emit('event-close-modal')">
    <template #title>
      Saada kasutajale sõnum
    </template>
     <template #body>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Pealkiri"
    :value="message.messageSubject"
    @input="$emit('event-update-subject', $event.target.value)">
  </div>

  <div class="input-group">
    <span class="input-group-text"></span>
    <textarea class="form-control" placeholder="Kirja sisu"
              :value="message.messageBody"
              @input="$emit('event-update-body', $event.target.value)"></textarea>
  </div>
     </template>

    <template #footer>
      <button type="button" class="btn btn-success me-2" @click="$emit('event-send-message')">Saada sõnum</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";

export default {
  name: "NewMessageModal" ,
  components: {Modal},
  props: {
    user: {},
    modalIsOpen: Boolean,
  },
  data(){
    return {


      message: {
        messageSubject: '',
        messageBody: '',
      },
    }
  }
}
</script>
