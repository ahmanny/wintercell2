<template>
  <v-navigation-drawer permanent flat app class="indigo bg-white border-sm" :width="220">
    <v-list density="compact" nav>
      <v-list-item>Boma Josiah</v-list-item>
      <v-list-item
        v-for="(item, i) in ListItem"
        :key="i"
        :title="item.title"
        rounded
        :value="item.value"
        color="blue"
        :to="{ name: item.route}"
        :prepend-icon="item.icon"
        class="custom-list-item"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      ListItem: [
        {title: "Tasks",value: "Task",icon: "mdi-check-circle-outline",route: "Task"},
        {title: "Schedule",value: "Schedule",icon: "mdi-calendar-range-outline",route: "schedule"},
        {title: "Request",value: "Request",icon: "mdi-message-text-outline",route: "request"},
        {title: "Check-ins",value: "Check-ins",icon: "mdi-clipboard-outline",route: "checkins"},
        {title: "Profile",value: "Profile",icon: "mdi-account-outline",route: "profile"},
      ],
    };
  },
};
</script>

<style>
  .custom-list-item .v-list-item__prepend{
    margin-right: -20px;
    font-size: 14px;
  }
</style>
