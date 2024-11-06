<template>
  <v-app class="bg-white">
    <user-sidebar></user-sidebar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import UserSidebar from "@/components/userSidebar.vue";

export default {
  components: { UserSidebar },
};
</script>

<style></style>
