<template>
  <div v-if="message && message.length > 0" class="alert alert-danger" role="alert">
    {{ message }}
  </div>
</template>
<script>
export default {
  name: 'AlertDanger',
  props: {
    message: String
  }
}
</script>