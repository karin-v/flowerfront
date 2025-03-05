<template>
  <nav>

<a href="/" style="text-decoration: #2c3e50"><h1>TAIMERINGLUS</h1></a>
    <div  class="row justify-content-center">
      <div class="col"><button  type="button" class="btn btn-outline-success"><router-link to="/items-giveaway" class="text-decoration-none">Annan ära</router-link> </button></div>
      <div class="col"> <button  type="button" class="btn btn-outline-success"><router-link to="/items-wish" class="text-decoration-none">Soovin leida</router-link> </button></div>
        <div class="col"> <button type="button" class="btn btn-outline-success"> <router-link to="/login" class="text-decoration-none">Logi sisse </router-link> </button></div>
          <div class="col"> <button  type="button" class="btn btn-outline-success"> <router-link to="/register" class="text-decoration-none"> Registreeri</router-link> </button></div>
      <div class="col"> <button  type="button" class="btn btn-outline-success"> <router-link to="/additem" class="text-decoration-none"> Lisa kuulutus</router-link> </button></div>

      <div class="col"> <router-link to="/search">
              <div class="col mb-4"><div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Otsi märksõna järgi" aria-label="Otsi märksõna järgi" aria-describedby="basic-addon2">
        <span class="input-group-text" id="basic-addon2">Otsi</span></div>
      </div></router-link>
            </div></div>
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