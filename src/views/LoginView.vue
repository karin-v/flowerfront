<template>
  <div>

    <div class="container text-center">

      <div class="row justify-content-center">
        <div class="col col-8">
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

            <button @click="login" type="submit" class="btn btn-primary me-3">Logi sisse</button>
            <button @click="navigateToRegisterView" type="submit" class="btn btn-secondary">Loo konto</button>
            <button @click="navigateToHomeView" type="submit" class="btn btn-secondary">Katkesta</button>

          </div>

        </div>
      </div>

    </div>


  </div>
</template>



<script>


import AlertDanger from "@/components/AlertDanger.vue";

export default {
  name: "LoginView",
  components: {AlertDanger}
}
</script>