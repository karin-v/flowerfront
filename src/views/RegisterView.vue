<template>
  <div>

    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-md-10">

          <div class="row mb-5">
            <div class="col">
              <h4 style="color:#212529; font-family: 'Arial', sans-serif;">  Loo uus konto</h4>
              <AlertDanger :message="errorMessage"/>
              <AlertSuccess :message="successMessage"/>
            </div>
          </div>

          <div class="row mt-5">

            <div class="col-md-6 pe-3">
              <div class="mb-4 d-flex justify-content-end align-items-center">
                <label class="form-text">Kasutajanimi</label>
                <input v-model="newUser.username" type="text" class="form-control w-auto ms-3">
              </div>

              <div class="mb-4 d-flex justify-content-end align-items-center">
                <label class="form-text">Parool</label>
                <input v-model="newUser.password" type="password" class="form-control w-auto ms-3">
              </div>

              <div class="mb-4 d-flex justify-content-end align-items-center">
                <label class="form-text">Parool uuesti</label>
                <input v-model="passwordRetype" type="password" class="form-control w-auto ms-3">
              </div>

              <div class="mb-3 d-flex justify-content-end align-items-center">
                <label class="form-text">E-mail</label>
                <input v-model="newUser.email" type="email" class="form-control w-auto ms-3">
              </div>
            </div>

            <div class="col-md-4 ps-0">
              <div class="ps-0 d-flex flex-column align-items-center">
                <div class="mb-3">
                  <UserImage :imageData="newUser.imageData"/>
                  <ImageInput class="mt-2" @event-new-image-selected="setNewUserImageData"/>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-md-6 offset-md-3 text-center">
              <div class="form-check d-inline-block text-start">
                <input v-model="newUser.consent" id="consentCheckbox" class="form-check-input" type="checkbox" style="border-color: darkgreen">
                <label for="consentCheckbox" class="form-check-label ms-2">
                  Olen nõus <a href="/kasutustingimused" target="_blank">kasutustingimustega</a>
                </label>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-md-6 offset-md-3 text-center">
              <button @click="addNewUser" type="button" class="btn btn-success me-3">Registreeri</button>
              <button @click="navigateToHomeView" type="button" class="btn btn-secondary">Katkesta</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AlertDanger from "@/components/alert/AlertDanger.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import RegisterService from "@/services/RegisterService";
import NavigationService from "@/services/NavigationService";
import HttpStatusCodes from "@/errors/HttpStatusCodes";
import BusinessErrors from "@/errors/BusinessErrors";
import ImageInput from "@/components/image/ImageInput.vue";
import UserImage from "@/components/image/UserImage.vue";

export default {
  name: "RegisterView",
  components: {UserImage, AlertSuccess, AlertDanger, ImageInput},
  data() {
    return {
      errorMessage: '',
      successMessage: '',
      passwordRetype: '',
      isOkToAddNewUser: false,

      newUser: {
        username: '',
        password: '',
        email: '',
        consent: false,
        imageData: ''
      },

      errorResponse: {
        message: '',
        errorCode: 0
      }

    }
  },
  methods: {

    setNewUserImageData(imageData) {
      if (imageData && imageData.length > 0) {
        this.newUser.imageData = imageData;
      } else {
        this.newUser.imageData = ''; // Set empty if no image
      }
    },

    addNewUser() {
      this.resetIsOkToAddNewUser();
      this.validateIsOkToAddNewUser()
      if (this.isOkToAddNewUser) {
        RegisterService.sendPostUserRequest(this.newUser)
            .then(response => this.handleAddNewUserResponse(response))
            .catch(error => this.handleNewUserErrorResponse(error))
      }
    },

    validateIsOkToAddNewUser() {
      if (this.newUser.username.length === 0) {
        this.errorMessage = 'Sisesta kasutajanimi'
        setTimeout(this.resetAllMessages, 4000)
      } else if (this.newUser.password.length === 0) {
        this.errorMessage = 'Sisesta parool'
        setTimeout(this.resetAllMessages, 4000)
      } else if (this.passwordRetype.length === 0) {
        this.errorMessage = 'Sisesta parool uuesti'
        setTimeout(this.resetAllMessages, 4000)
      } else if (this.newUser.email.length === 0) {
        this.errorMessage = 'Sisesta email'
        setTimeout(this.resetAllMessages, 4000)
      } else if (!this.newUser.consent) {
        this.errorMessage = 'Tutvu kasutajatingimustega ja kinnita nõusolek'
        setTimeout(this.resetAllMessages, 4000)
      } else if (this.passwordRetype !== this.newUser.password) {
        this.errorMessage = 'Paroolid ei kattu'
        setTimeout(this.resetAllMessages, 4000)
      } else {
        this.isOkToAddNewUser = true
      }
    },

    handleAddNewUserResponse() {
      this.successMessage = 'Kasutaja "' + this.newUser.username + '" on lisatud';
      this.resetAllFields();

      setTimeout(() => {
        NavigationService.navigateToLoginView();
      }, 3000);
    },

    handleNewUserErrorResponse(error) {
      this.errorResponse = error.response.data;
      if (error.response.status === HttpStatusCodes.STATUS_FORBIDDEN && (this.errorResponse.errorCode === BusinessErrors.CODE_USERNAME_EXISTS || this.errorResponse.errorCode === BusinessErrors.CODE_EMAIL_EXISTS)) {
        this.errorMessage = this.errorResponse.message
        setTimeout(this.resetAllMessages, 4000)
        this.resetAllFields()
      } else {
        NavigationService.navigateToErrorView()
      }
    },

    resetIsOkToAddNewUser() {
      this.isOkToAddNewUser = false
    },

    resetAllFields() {
      this.newUser.username = ''
      this.newUser.password = ''
      this.newUser.email = ''
      this.newUser.consent = false
    },

    resetAllMessages() {
      this.successMessage = ''
      this.errorMessage = ''
    },

    navigateToHomeView() {
      NavigationService.navigateToHomeView()
    }
  }
}
</script>


