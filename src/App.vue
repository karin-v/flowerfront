<template>
  <nav>

<a href="/"><h1>TAIMERINGLUS</h1></a>
    <router-link to="/items-giveaway">Annan ära</router-link> |
    <router-link to="/items-wish">Soovin leida</router-link> |
    <router-link to="/login">Logi sisse/Registreeri</router-link> |
    <router-link to="/search">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Otsi märksõna järgi" aria-label="Otsi märksõna järgi" aria-describedby="basic-addon2">
        <span class="input-group-text" id="basic-addon2">Otsi</span>
      </div></router-link>
  </nav>
  <router-view/>
</template>

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
<script setup lang="ts">
</script>