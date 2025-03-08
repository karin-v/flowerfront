<template>
  <div class="container mt-3">
    <div class="row justify-content-center mb-3">
      <div class="col-md-10 text-center">
        <a href="/" style="text-decoration: none;">
          <img src="@/assets/taimeringlus-logo.png" style="height: 75px; margin-left: -1.5cm;" alt="taimeringlus"/>
        </a>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="d-flex flex-wrap justify-content-center align-items-center">

          <div class="d-flex align-items-center">
            <div class="mx-2">
              <router-link to="/items-giveaway" style="text-decoration: none; color: #212529;">Annan ära</router-link>
            </div>
            <div class="mx-2">|</div>
            <div class="mx-2">
              <router-link to="/items-wish" style="text-decoration: none; color: #212529;">Soovin leida</router-link>
            </div>
            <div class="mx-2">|</div>
          </div>

          <template v-if="isLoggedIn">
            <div class="mx-2">
              <router-link to="/add-item" style="text-decoration: none; color: #212529;">Lisa kuulutus</router-link>
            </div>
            <div class="mx-2">|</div>
            <div class="mx-2">
              <router-link to="/my-profile" style="text-decoration: none; color: #212529;">Minu profiil</router-link>
            </div>
            <div class="mx-2">|</div>
            <div class="mx-2">
              <button @click="logOut" type="button" class="btn btn-outline-success btn-sm">Logi välja</button>
            </div>
          </template>

          <template v-else>
            <div class="mx-2">
              <router-link to="/login" style="text-decoration: none; color: #212529;">Logi sisse</router-link>
            </div>
            <div class="mx-2">|</div>
            <div class="mx-2">
              <router-link to="/register" style="text-decoration: none; color: #212529;">Registreeri</router-link>
            </div>
            <div class="mx-2">|</div>
          </template>

          <div class="mx-2">
            <router-link to="/search" style="text-decoration: none;">
              <div class="input-group" style="width: 200px;">
                <input type="text" class="form-control form-control-sm" placeholder="Otsi märksõna järgi"
                       aria-label="Otsi märksõna järgi" aria-describedby="basic-addon2">
                <span class="input-group-text bg-success text-white" id="basic-addon2">Otsi</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <router-view @event-update-nav-menu="updateNavMenu"/>
</template>

<!--<template>-->
<!--  <nav>-->

<!--    <a href="/"><h1>TAIMERINGLUS</h1></a>-->

<!--    <router-link to="/items-giveaway">Annan ära</router-link>-->
<!--    |-->
<!--    <router-link to="/items-wish">Soovin leida</router-link>-->
<!--    |-->

<!--    <template v-if="isLoggedIn">-->
<!--      <router-link to="/add-item">Lisa kuulutus</router-link>-->
<!--      |-->
<!--      <router-link to="/my-profile">Minu profiil</router-link>-->
<!--      |-->
<!--      <button @click="logOut" type="button" class="btn-outline-success">Logi välja</button>-->

<!--    </template>-->

<!--    <template v-else>-->
<!--      <router-link to="/login">Logi sisse</router-link>-->
<!--      |-->
<!--      <router-link to="/register"> Registreeri</router-link>-->
<!--    </template>-->
<!--    <router-link to="/search">-->
<!--      <div class="input-group mb-3">-->
<!--        <input type="text" class="form-control" placeholder="Otsi märksõna järgi" aria-label="Otsi märksõna järgi"-->
<!--               aria-describedby="basic-addon2">-->
<!--        <span class="input-group-text" id="basic-addon2">Otsi</span>-->
<!--      </div>-->
<!--    </router-link>-->
<!--  </nav>-->
<!--  <router-view @event-update-nav-menu="updateNavMenu"/>-->
<!--</template>-->

<script>
import router from "@/router";

export default {
  data() {
    return {
      isLoggedIn: false
    }
  },
  methods: {

    updateNavMenu() {
      let userId = sessionStorage.getItem('userId')
      this.isLoggedIn = userId !== null
    },

    logOut() {
      sessionStorage.clear()
      router.push({name: 'homeRoute'})
      this.isLoggedIn = false
    },
  }
}


</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>