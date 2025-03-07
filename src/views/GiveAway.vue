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
    </router-link>
    <div>

    </div>

    <div class="mb-lg-1">
    <button type="button" class="btn btn-success">Lisa kuulutus</button>
    </div>
    <div class="mb-3">
      <button @click="navigateToHomeView" type="submit" class="btn btn-success">Avalehele</button>
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



