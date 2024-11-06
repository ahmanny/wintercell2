<template>
  <v-app class="bg-blue">
    <sidebar/>
    <v-main>
        <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from '@/components/mainSidebar.vue';
export default {
  components: { Sidebar },
};
</script>

<style></style>
