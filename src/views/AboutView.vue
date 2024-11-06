<template>
  <v-app>
    <main-sidebar></main-sidebar>
    <v-main>
      <v-navigation-drawer app class="white--text bg-red">
        <v-list>
          <v-list-item
            title="Task"
            color="yellow"
            :to="{ name: 'Task' }"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-main>
  </v-app>
</template>

<script>
import MainSidebar from "@/components/mainSidebar.vue";

export default {
  components: { MainSidebar },
};
</script>

<style></style>
