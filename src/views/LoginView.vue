<template>
  <div>
    <div class="container text-center">

      <div class="row justify-content-center">
        <div class="col col-4">
          <AlertDanger :message="message"/>
        </div>
      </div>

      <div class="row justify-content-center mt-5">
        <div class="col col-4">
          <div>

            <div class="mb-3">
              <label class="form-label">Kasutajanimi</label>
              <input v-model="username" type="text" class="form-control">
            </div>

            <div class="mb-3">
              <label class="form-label">Parool</label>
              <input v-model="password" type="password" class="form-control">
            </div>

            <div class="row mt-5 align-items-center">
              <div class="justify-content-between">
                <button @click="login" type="submit" class="btn btn-success me-3">Logi sisse</button>
                <button @click="navigateToRegisterView" type="submit" class="btn btn-success me-3">Loo konto</button>
                <button @click="navigateToHomeView" type="submit" class="btn btn-secondary me-3">Katkesta</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlertDanger from "@/components/alert/AlertDanger.vue";
import LoginService from "@/services/LoginService";
import NavigationService from "@/services/NavigationService";
import HttpStatusCodes from "@/components/errors/HttpStatusCodes";
import BusinessErrors from "@/components/errors/BusinessErrors";

export default {
  name: 'LoginView',
  components: {AlertDanger},
  data() {
    return {
      username: '',
      password: '',
      message: '',
      loginResponse: {
        userId: 0,
        roleName: ''
      },
      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },

  methods: {

    login() {
      if (this.allFieldsWithCorrectInput()) {
        this.sendLoginRequest();
      } else {
        this.alertMissingFields();
      }
    },

    sendLoginRequest() {
      LoginService.sendLoginRequest(this.username, this.password)
          .then(response => this.handleLoginResponse(response))
          .catch(error => this.handleLoginErrorResponse(error))
    },

    handleLoginErrorResponse(error) {
      this.errorResponse = error.response.data
      let httpStatusCode = error.response.status;
      if (this.isIncorrectCredentials(httpStatusCode)) {
        this.handleIncorrectCredentialsAlert()
      } else {
        NavigationService.navigateToErrorView()
      }
    },

    isIncorrectCredentials(httpStatusCode) {
      return HttpStatusCodes.STATUS_FORBIDDEN === httpStatusCode
          && BusinessErrors.CODE_INCORRECT_CREDENTIALS === this.errorResponse.errorCode;
    },

    handleLoginResponse(response) {
      this.loginResponse = response.data
      this.updateSessionStorageWithUserDetails()
      this.$emit('event-update-nav-menu')
      NavigationService.navigateToHomeView();
    },

    updateSessionStorageWithUserDetails() {
      sessionStorage.setItem('userId', this.loginResponse.userId)
      sessionStorage.setItem('roleName', this.loginResponse.roleName)
    },


    alertMissingFields() {
      this.message = 'Täida kõik väljad'
      setTimeout(this.resetAlertMessage, 4000)
    },

    handleIncorrectCredentialsAlert() {
      this.message = this.errorResponse.message;
      setTimeout(this.resetAlertMessage, 4000);
    },

    allFieldsWithCorrectInput() {
      return this.username.length > 0 && this.password.length > 0;
    },

    resetAlertMessage() {
      this.message = ''
    },

    navigateToRegisterView() {
      NavigationService.navigateToRegisterView()
    },

    navigateToHomeView() {
      NavigationService.navigateToHomeView()
    },
  }
}

</script>



