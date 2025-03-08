<template>
  <div style="display: flex; flex-direction: column; align-items: center; padding: 10px 15px;">
    <div style="display: flex; align-items: center; margin-bottom: 10px;">
      <a href="/" style="text-decoration: none; color: #212529;">

      <img src="@/assets/taimeringlus-logo.png" style="height: 75px;" alt="taimeringlus"/></a>

    </div>

    <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center;">
      <div style="display: flex; align-items: center;">
        <div style="margin: 0 5px;">
          <router-link to="/items-giveaway" style="text-decoration: none; color: #212529;">Annan ära</router-link>
        </div>
        <div style="margin: 0 5px;">|</div>
        <div style="margin: 0 5px;">
          <router-link to="/items-wish" style="text-decoration: none; color: #212529;">Soovin leida</router-link>
        </div>
        <div style="margin: 0 5px;">|</div>
      </div>

      <template v-if="isLoggedIn">
        <div style="margin: 0 5px;">
          <router-link to="/add-item" style="text-decoration: none; color: #212529;">Lisa kuulutus</router-link>
        </div>
        <div style="margin: 0 5px;">|</div>
        <div style="margin: 0 5px;">
          <router-link to="/my-profile" style="text-decoration: none; color: #212529;">Minu profiil</router-link>
        </div>
        <div style="margin: 0 5px;">|</div>
        <div style="margin: 0 5px;">
          <button @click="logOut" type="button" style="color: #198754; background-color: transparent; border: 1px solid #198754; border-radius: 4px; padding: 5px 10px; cursor: pointer;">Logi välja</button>
        </div>
      </template>

      <template v-else>
        <div style="margin: 0 5px;">
          <router-link to="/login" style="text-decoration: none; color: #212529;">Logi sisse</router-link>
        </div>
        <div style="margin: 0 5px;">|</div>
        <div style="margin: 0 5px;">
          <router-link to="/register" style="text-decoration: none; color: #212529;">Registreeri</router-link>
        </div>
        <div style="margin: 0 5px;">|</div>
      </template>

      <div style="margin: 0 5px;">
        <router-link to="/search" style="text-decoration: none;">
          <div style="display: flex; width: 200px;">
            <input type="text" placeholder="Otsi märksõna järgi" aria-label="Otsi märksõna järgi"
                   aria-describedby="basic-addon2" style="height: 30px; font-size: 14px; border-radius: 4px 0 0 4px; border: 1px solid #ced4da; padding: 0 8px;">
            <span id="basic-addon2" style="height: 30px; display: flex; align-items: center; border-radius: 0 4px 4px 0; background-color: #198754; color: white; cursor: pointer; padding: 0 10px;">Otsi</span>
          </div>
        </router-link>
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