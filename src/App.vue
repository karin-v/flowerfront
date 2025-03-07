<template>
  <nav>

    <a href="/"><h1>TAIMERINGLUS</h1></a>

    <router-link to="/items-giveaway">Annan ära</router-link>
    |
    <router-link to="/items-wish">Soovin leida</router-link>
    |

    <template v-if="isLoggedIn">
      <button @click="logOut" type="button">Logi välja</button>
    </template>
    <template v-else>
      <router-link to="/login">Logi sisse</router-link>
      |

    <router-link to="/register"> Registreeri</router-link>
    |  </template>
    <router-link to="/search">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Otsi märksõna järgi" aria-label="Otsi märksõna järgi"
               aria-describedby="basic-addon2">
        <span class="input-group-text" id="basic-addon2">Otsi</span>
      </div>
    </router-link>
  </nav>
  <router-view @event-update-nav-menu="updateNavMenu"/>
</template>

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