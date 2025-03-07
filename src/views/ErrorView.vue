<template>
  <div>
    <AlertDanger message="Midagi läks valesti"/>
  </div>
</template>

<script>
import AlertDanger from "@/components/AlertDanger.vue";

export default {
  name: 'ErrorView',
  components: {AlertDanger}
}
</script>

