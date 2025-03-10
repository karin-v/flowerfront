<template>
  <div>
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-md-10">

          <div class="row mb-5">
            <div class="col">
              <h4 style="color:#212529; font-family: 'Arial', sans-serif;">Minu profiil</h4>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-md-6 ps-0">
              <div class="mb-4 d-flex flex-column align-items-center">
                <div>
<!--                  <UserImage/>--> Siia tuleb pilt
                </div>

                <div>
                  <label class="form-text">Kasutajanimi</label>
                </div>

                <div>
                  <label class="form-text">E-mail</label>
                </div>

                <div>
                  <label class="form-text">Parool</label>
                </div>

              </div>
            </div>

            <div class="col-md-6 pe-3">
              <div class="mb-4">
                <button type="button" class="btn btn-success me-3">Minu kuulutused</button>
              </div>

              <div>
                <button type="button" class="btn btn-success me-3">Minu tehingud</button>
              </div>

            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-6 offset-md-3 text-center">

            <button type="button" class="btn btn-success me-3">Muuda andmeid</button>
            <button type="button" class="btn btn-success me-3">Avalehele</button>
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
import axios from "axios";

export default {
  name: "ProfileView" ,
  components: {UserImage, ImageInput, AlertSuccess, AlertDanger},
  data() {
    return {
      userId: Number(sessionStorage.getItem('userId')),
      user: {
        username: '',
        email: '',
        userImage: ''
      }
    }

  },
  methods: {

    getUserInfo(userId) {
      UserService.sendGetUserInfoReguest(userId)
      {
        axios.get('/user')
            .then(response => this.someDataBlockResponseObject = response.data)
            .catch(error => this.someDataBlockErrorResponseObject = error.response.data)
      }

    }


   },


    // todo: siia tuleb meetod mis saadab backendile sõnumi user profile andmete ära toomiseks

  beforeMount() {

  //todo: kutsu välja meetod mis toob ära user profile andmed
  }

}
</script>

