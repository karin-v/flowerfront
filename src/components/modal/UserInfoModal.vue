<template>

</template>

<script>
import UserImage from "@/components/image/UserImage.vue";
import UserService from "@/services/UserService";
import NavigationService from "@/services/NavigationService";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";

export default {
  name: "ViewUserInfoModal",
  components: {UserImage, Modal, AlertDanger, AlertSuccess},
  data() {
    return {
      successMessage: '',
      errorMessage: '',
      userId: Number(sessionStorage.getItem('userId')),
      user: [
        {
          username: '',
          email: '',
          userImage: ''
        }
      ],
      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  props: {
    modalIsOpen: Boolean,
  },

  methods: {


    updateUser() {
      UserService.sendPutUpdateUserRequest(this.userId, this.user)
          .then(response => this.handleUpdateUserResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleUpdateUserResponse(response) {
      this.successMessage = 'Kasutaja andmed on muudetud'
      setTimeout(this.resetAllMessages, 4000)

    },

    resetAllMessages() {
      this.successMessage = ''
      this.errorMessage = ''
    }
  }
}


</script>


