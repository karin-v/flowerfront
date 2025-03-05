<template>
  <div>

    <div class="container text-center">

      <div class="row justify-content-center">
        <div class="col col-4">
          <AlertDanger :message="message"/>
        </div>
      </div>

      <div class="row justify-content-center">
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

            <div class="mb-3">
            <button @click="login" type="submit" class="btn btn-success">Logi sisse</button>
            </div>

            <div class="mb-3">
            <button @click="navigateToRegisterView" type="submit" class="btn btn-success">Loo konto</button>
            </div>
            <div class="mb-3">
            <button @click="navigateToHomeView" type="submit" class="btn btn-success">Katkesta</button>
            </div>

          </div>

        </div>
      </div>

    </div>


  </div>
</template>

<script>
import AlertDanger from "@/components/alert/AlertDanger.vue";
import router from "@/router";
import LoginService from "@/services/LoginService";
import NavigationService from "@/services/NavigationService";


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
    sendLoginRequest(){
      LoginService.sendLoginRequest(this.username, this.password)
          .then(response => this.handleLoginResponse(response))
          .catch(error => this.handleLoginErrorResponse(error))
    },

          handleLoginResponse(response) {
            this.loginResponse = response.data
            sessionStorage.setItem('userId', this.loginResponse.userId)
            sessionStorage.setItem('roleName', this.loginResponse.roleName)
            NavigationService.navigateToRegisterView();
          },




          // Tahan muuta navigatsiooni linke this.$emit('event-update-nav-menu'),


          // Liigun tagasi Avalehele router.push({name: 'homeRoute'}),



  alertMissingFields()
  {this.message = 'Täida kõik väljad'
      setTimeout(this.resetAlertMessage, 4000)
    },

    allFieldsWithCorrectInput() {
      return this.username.length > 0 && this.password.lenght > 0;
    },
  }
}

</script>



