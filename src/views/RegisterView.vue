<template>
  <div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col">
          <h2>Loo uus konto</h2>
          <AlertDanger :message="errorMessage"/>
          <AlertSuccess :message="successMessage"/>
        </div>

      </div>

      <div class="row mt-5 align-items-center">
        <div class="col-md-6">
          <div class="mb-4 d-flex justify-content-end align-items-center">
            <label class="form-text">Kasutajanimi</label>
            <input v-model="newUser.username" type="text" class="form-control w-auto ms-3">
          </div>

          <div class="mb-4 d-flex justify-content-end align-items-center">
            <label class="form-text">Parool</label>
            <input v-model="newUser.password" type="email" class="form-control w-auto ms-3">
          </div>

          <div class="mb-4 d-flex justify-content-end align-items-center">
            <label class="form-text">Parool uuesti</label>
            <input v-model="passwordRetype" type="password" class="form-control w-auto ms-3">
          </div>

          <div class="mb-4 d-flex justify-content-end align-items-center">
            <label class="form-text">E-mail</label>
            <input v-model="newUser.email" type="email" class="form-control w-auto ms-3">
          </div>

        </div>

        <div class="col-md-3 d-flex justify-content-center">

          <img src="../assets/profilePictureDefault.webp" height="200" width="200" alt="Profiilipilt"/></div>

      </div>
      <div>
        <div class="mb-4">
          <input type="checkbox" class="form-check-input">

          Olen nõus kasutustingimustega

        </div>
      </div>

      <div class="row mt-5 align-items-center">

        <div class="justify-content-between">
          <button type="button" class="btn btn-success me-3">Lisa pilt</button>
          <button @click="addNewUser" type="button" class="btn btn-success me-3">Registreeri</button>
          <button @click="navigateToHomeView" type="button" class="btn btn-secondary">Katkesta</button>

        </div>
      </div>

    </div>

  </div>

</template>

<script>

import AlertDanger from "@/components/AlertDanger.vue";
import AlertSuccess from "@/components/AlertSuccess.vue";
import RegisterService from "@/service/RegisterService";
import NavigationService from "@/service/NavigationService";
import router from "@/router";

export default {
  name: "RegisterView",
  components: {AlertSuccess, AlertDanger},
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
      if (this.user.username.length === 0) {
        this.errorMessage = 'Sisesta kasutajanimi'
        setTimeout(this.resetAllMessages, 4000)
      } else if (this.user.password.length === 0) {
        this.errorMessage = 'Sisesta parool'
        setTimeout(this.resetAllMessages, 4000)
      } else if (isTermsAgreed) {
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
      this.successMessage = 'Kasutaja "' + this.newUser.username + '" on lisatud'
      setTimeout(this.resetAllMessages, 2000)
    },

    handleNewUserErrorResponse(error) {
      this.errorResponse = error.response.data;
      if (error.response.status === 403 && (this.errorResponse.errorCode === 112 || this.errorResponse.errorCode === 113)) {
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


