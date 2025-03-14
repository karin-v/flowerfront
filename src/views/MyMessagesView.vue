<template>
  <div class="row mb-5">
    <div class="col">
      <h4 style="color:#212529; font-family: 'Arial', sans-serif;">Minu sõnumid</h4>
    </div>
  </div>
  <div class="row mb-5">
    <div class="col">
      <h3 style="color:#212529; font-family: 'Arial', sans-serif;"> Sissetulnud kirjad </h3>
  <IncomingMessages/>
    </div>
  </div>
  <div class="row mb-5">
    <div class="col">
      <h3 style="color:#212529; font-family: 'Arial', sans-serif;"> Saadetud kirjad </h3>
  <OutgoingMessages/>
    </div>
  </div>
</template>


<script>
import IncomingMessages from "@/components/messages/IncomingMessages.vue";
import OutgoingMessages from "@/components/messages/OutgoingMessages.vue";

export default {
  name: 'MyMessagesView',
  components: {OutgoingMessages, IncomingMessages}

}
</script>


