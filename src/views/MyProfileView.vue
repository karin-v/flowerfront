<template>
  <div class="row justify-content-center">
    <!-- Heading -->
    <div class="col-12 mb-3 text-center">
      <h2>Minu profiil</h2>
    </div>

    <!-- Two columns for profile picture and information -->

      <div class="col-6">
      <!-- Left column: Profile picture and text rows -->
      <div class="text-center mb-3">
        <img src="../assets/profilePictureDefault.webp" alt="Profiilipilt 1" class="img-fluid mb-2" style="width: 100px; height: 100px;">
      </div>
      <div class="profile-text">
        <p class="mb-1">Kasutajanimi: </p>
        <p class="mb-1">Email: </p>
        <p class="mb-1">Parool: </p>
      </div>

    </div>

    <div class="col-6">
      <!-- Right column: Text information aligned with left column -->
      <div class="profile-text">
        <p class="mb-1">Kasutajanimi: </p>
        <p class="mb-1">Email: </p>
        <p class="mb-1">Parool: </p>
      </div>
    </div>
  </div>
</template>


<script>
import AlertDanger from "@/components/alert/AlertDanger.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";

export default {
  name: "ProfileView" ,
  components: {AlertSuccess, AlertDanger}
}
</script>

