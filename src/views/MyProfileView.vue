<template>
  <div>
    <UpdateProfileModal :modal-is-open="modalIsOpen"
                        :user="user"
                        @event-close-modal="closeModal"
                        @event-update-username="setUserUsername"
                        @event-update-email="setUserEmail"
                        @event-new-image-selected="setUserUserImage"
                        @event-update-user="updateUser"
    />

    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-md-10">

          <div class="row mb-5">
            <div class="col">
              <h4 style="color:#212529; font-family: 'Arial', sans-serif;">Minu profiil</h4>
            </div>
          </div>

          <div class="row mt-5 justify-content-center">
            <div class="col-md-5">
              <div>

                <UserImage :image-data="user.userImage" alt="Profiilipilt"/>
                <!--                  <img :src="user.userImage" alt="Profiilipilt"/>-->


                <div class="ms-2">
                  <label class="form-text">Kasutajanimi: {{ user.username }}</label>
                </div>

                <div class="ms-2">
                  <label class="form-text">Email: {{ user.email }}</label>
                </div>

              </div>
            </div>

            <div class="col-md-4 justify-content-center me-2">
              <div class="mt-1 mb-4">
                <button type="button" class="btn btn-outline-secondary" style="color: seagreen" aria-expanded="false">
                  Minu kuulutused
                </button>
              </div>

              <div>
                <button type="button" class="btn btn-outline-success" style="color: seagreen" aria-expanded="false"
                        @click="navigateToMessagesView">
                  Minu sõnumid
                </button>
              </div>

            </div>
          </div>
        </div>

        <div class="row mt-5 justify-content-center ms-4">
          <div class="col-md-6">

            <button @click="openUserInfoModal" type="button" class="btn btn-success me-3">Muuda andmeid</button>
            <button @click="navigateToHomeView" type="button" class="btn btn-success me-3">Avalehele</button>
            <button type="button" class="btn btn-secondary">Kustuta konto</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlertDanger from "@/components/alert/AlertDanger.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import ImageInput from "@/components/image/ImageInput.vue";
import UserImage from "@/components/image/UserImage.vue";
import UserService from "@/services/UserService";
import NavigationService from "@/services/NavigationService";
import UpdateProfileModal from "@/components/modal/UpdateProfileModal.vue";

export default {
  name: "ProfileView",
  components: {UpdateProfileModal, UserImage, ImageInput, AlertSuccess, AlertDanger},
  data() {
    return {
      modalIsOpen: false,
      userId: Number(sessionStorage.getItem('userId')),
      successMessage: '',
      errorMessage: '',

      user: {
        username: '',
        email: '',
        userImage: ''
      },

      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {

    setUserUserImage(userImage) {
      this.user.userImage = userImage
    },

    setUserUsername(username) {
      this.user.username = username
    },

    setUserEmail(email) {
      this.user.email = email
    },

    updateUser() {
      this.closeModal()
      UserService.sendPutUpdateUserRequest(this.userId, this.user)
          .then(response => this.handleUpdateUserResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleUpdateUserResponse(response) {
      this.successMessage = 'Kasutaja andmed on muudetud'
      setTimeout(this.resetAllMessages, 4000)
    },

    openUserInfoModal() {
      this.modalIsOpen = true
    },

    closeModal() {
      this.modalIsOpen = false
    },

    getUserInfo() {
      UserService.sendGetUserInfoRequest(this.userId)
          .then(response => this.handleGetUserInfoResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleGetUserInfoResponse(response) {
      this.user = response.data;
    },

    resetAllMessages() {
      this.successMessage = ''
      this.errorMessage = ''
    },

    navigateToHomeView() {
      NavigationService.navigateToHomeView()
    },

    navigateToMessagesView() {
      NavigationService.navigateToMessagesView()
    },

  },
    beforeMount() {

      this.getUserInfo()
    }
  }
</script>

