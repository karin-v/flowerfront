<template>
  <div>


    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col col-4">

          <div class="alert alert-danger" role="alert">
            A simple danger alert—check it out!
          </div>

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
export default {
  name: "LoginView"
}
</script>



