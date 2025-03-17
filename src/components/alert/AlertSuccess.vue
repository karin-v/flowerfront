<template>
  <div v-if="message && message.length > 0" class="alert alert-success" role="alert">
    {{ message }}
  </div>
</template>
<script>
export default {
  name: 'AlertSuccess',
  props: {
    message: String
  }
}
</script>