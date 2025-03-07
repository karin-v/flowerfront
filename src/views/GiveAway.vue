<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h2>Annan ära</h2>
      </div>
    </div>

    <div class="btn-group">
      <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Maakond
      </button>
      <ul class="dropdown-menu">

      </ul>
    </div>

    <div class="btn-group">
      <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Linn/vald
      </button>
      <ul class="dropdown-menu">

      </ul>
    </div>

    <div class="btn-group">
      <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Leia kategooria
      </button>
      <ul class="dropdown-menu">

      </ul>
    </div>
    <router-link to="/search">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Otsi märksõna järgi" aria-label="Otsi märksõna järgi"
               aria-describedby="basic-addon2">
        <span class="input-group-text" id="basic-addon2">Otsi</span>
      </div>

      <div class="col">
        <img src="../assets/istockphoto-1380361370-612x612.jpg" class="rounded mx-auto d-block">
        <p class="fw-bold">Banaanipuu</p>
        <img src="../assets/orchid-spider-plant-7bc6dab8-4cb320efcec64205a3a2e0fb9ff0e2db.jpg" class="rounded mx-auto d-block">
        <p class="fw-bold">Ämbliku puu</p>
        <img src="../assets/zidi01360.jpg" class="rounded mx-auto d-block">
        <p class="fw-bold">Porgandi seemned</p>
      </div>
    </router-link>
    <div>

    </div>

    <div class="row mt-5 align-items-center">

      <div class="justify-content-between">
        <button type="button" class="btn btn-success me-3">Lisa kuulutus</button>
        <button @click="navigateToHomeView" type="submit" class="btn btn-success me-3">Avalehele</button>
      </div>
    </div>
  </div>

</template>

<script>
import NavigationService from "@/service/NavigationService";

export default {
  name: "GiveAway",
  data() {

  },

  methods: {
    navigateToHomeView() {
      NavigationService.navigateToHomeView()
    },
  }
}
</script>



