<template>
  <div>
    <AlertDanger message="Midagi läks valesti"/>
  </div>
</template>

<script>
import AlertDanger from "@/components/alert/AlertDanger.vue";

export default {
  name: 'ErrorView',
  components: {AlertDanger}
}
</script>

