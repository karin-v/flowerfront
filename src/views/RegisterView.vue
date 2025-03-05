<template>
<div>
  <h1>Loo uus konto</h1>
  <div class="container">
    <div class="row mt-5 align-items-center">
      <div class="col-md-6">
        <div class="mb-4 d-flex justify-content-end align-items-center">
          <label class="form-text">Kasutajanimi</label>
          <input type="text" class="form-control w-auto ms-3" >
        </div>

        <div class="mb-4 d-flex justify-content-end align-items-center">
          <label class="form-text">Parool</label>
          <input type="email" class="form-control w-auto ms-3">
        </div>

        <div class="mb-4 d-flex justify-content-end align-items-center">
          <label class="form-text">Parool uuesti</label>
          <input type="password" class="form-control w-auto ms-3">
        </div>

        <div class="mb-4 d-flex justify-content-end align-items-center">
          <label class="form-text">E-mail</label>
          <input type="email" class="form-control w-auto ms-3">
        </div>

      </div>

      <div class="col-md-3 d-flex justify-content-center">


        <img src="../assets/profilePictureDefault.webp" height="200" width="200" alt="Profiilipilt"/></div>

    </div>
    <div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox">

          Olen nõus kasutustingimustega

      </div>
    </div>

      <div class="row mt-5 align-items-center">

        <div class="justify-content-between">
          <button type="button" class="btn btn-success me-3" >Lisa pilt</button>
          <button type="button" class="btn btn-success me-3" >Kinnita</button>
          <button type="button" class="btn btn-secondary" >Katkesta</button>

        </div>
      </div>

  </div>

</div>


</template>


<script>
export default {
  name: "RegisterView"
}
</script>


