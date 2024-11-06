<template>
  <v-app>
    <v-tabs v-model="tab">
      <v-tab value="one" color="blue">Your tasks</v-tab>
      <v-tab value="two" color="blue">Assigned by you</v-tab>
      <v-tab value="three" color="blue">Blocking you</v-tab>
      <v-tab value="four" color="blue">Blocking by you</v-tab>
    </v-tabs>
  </v-app>
</template>

<script> 
export default {
  data() {
    return {
        tab:null
    };
  },
};
</script>

<style></style>
