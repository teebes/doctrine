<template>
  <v-app id="inspire" style="background: #191a1c">
    <NavigationDrawer :drawer="drawer" @input="drawer = $event" />

    <v-app-bar app clipped-left class="flex" color="#131217" height="80">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <div class="d-flex align-center">
          <a href="https://writtenrealms.com" class="d-flex align-center">
            <v-img
              :src="require('./assets/logo-black.svg')"
              width="30px"
              height="30px"
              class="d-block"
            ></v-img>
            <v-img
              :src="require('./assets/written-realms.svg')"
              width="165px"
              height="19px"
              class="d-block ml-2"
            ></v-img>
          </a>
          <div class="ml-3 pt-1">docs</div>
        </div>
      </v-toolbar-title>
      <div class="ml-auto d-none d-sm-flex">
        <a target="_blank" href="https://github.com/teebes/doctrine">
          <v-icon class="pr-4">mdi-github-circle</v-icon>
        </a>
        <a target="_blank" href="https://discordapp.com/invite/a3u82tR">
          <v-icon class="pr-4">mdi-discord</v-icon>
        </a>
        <a target="_blank" href="https://www.patreon.com/writtenrealms">
          <v-icon class="pr-4">mdi-patreon</v-icon>
        </a>
      </div>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020 Morel Software, LLC</span>
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

<style>
a {
  text-decoration: none;
}
</style>
