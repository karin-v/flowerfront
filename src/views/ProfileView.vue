
<template>
<div>

  <div class="row justify-content-center">
    <div class="col">
      <h2>Minu profiil</h2>
    </div>

    <div class="row mt-5">
      <div class="row">
        <div class="col">
          <img :src="imageData" class="img-thumbnail" alt="Profiilipilt">

        </div>

        <div class="col">
          Column
        </div>
        </div>
      <div>


      </div>
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

