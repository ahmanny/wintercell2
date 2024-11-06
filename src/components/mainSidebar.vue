<template>
  <v-navigation-drawer class="navBar" permanent rail app>
    <v-list density="compact" nav>
      <v-list-item
      v-for="(item,i) in sidebarList"
      :key="i"
        :prepend-icon="item.icon"
        :value="item.value"
        :to="{ name: item.route }"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      sidebarList: [
        { value: "user", icon: "mdi-account-outline", route: "user" },
        {
          value: "company",
          icon: "mdi-view-dashboard-outline",
          route: "company",
        },
        {
          value: "department",
          icon: "mdi-account-multiple-outline",
          route: "department",
        },
        { value: "project", icon: "mdi-folder-outline", route: "project" },
        {
          value: "notification",
          icon: "mdi-bell-outline",
          route: "notification",
        },
      ],
    };
  },
};
</script>

<style>
.navBar {
  background-color: #0b1318;
  color: white;
}
</style>
