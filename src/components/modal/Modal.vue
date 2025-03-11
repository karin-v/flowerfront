<template>
<div>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Muuda andmeid</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Sulge"></button>
        </div>
        <div class="modal-body">
          <p>Kasutajanimi: </p>
          <p>Email: </p>
          <p>Lisa pilt: </p>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sulge</button>
          <button type="button" class="btn btn-primary">Salvesta</button>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "Modal",
  props:{
    modalIsOpen: Boolean
  }
}
</script>

