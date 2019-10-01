<template>
  <v-app id="inspire">
    <NavigationDrawer :drawer="drawer" @input="drawer = $event" />

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Written Realms Documentation</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019 Morel Software, LLC</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavigationDrawer from "@/components/frame/NavigationDrawer";

export default {
  name: "App",
  components: {
    NavigationDrawer
  },
  // props: {
  //   source: String,
  // },
  data: () => ({
    drawer: false
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
