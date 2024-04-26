<template>
  <!-- v-model="drawer" -->
  <v-navigation-drawer :value="drawer" @input="$emit('input', $event)" app clipped>
    <v-list dense>
      <!-- Home nav item -->
      <v-list-item @click="navTo('/')">
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <!-- Playing Links -->
      <v-list-item @click="navTo('/playing')">
        <v-icon>mdi-sword</v-icon>
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-title :class="{['secondary--text']: $route.path == '/playing'}">Playing</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        class="ml-0"
        v-for="nav_link in playing_links"
        :key="nav_link.route"
        @click="navTo(nav_link.route)"
      >
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-title
            :class="{['secondary--text']: $route.path == nav_link.route}"
          >{{ nav_link.label }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <!-- Building Links -->
      <v-list-item @click="navTo('/building')">
        <v-icon>mdi-wrench</v-icon>
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-title :class="{['secondary--text']: $route.path == '/building'}">Building</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        class="ml-0"
        v-for="(nav_link, index) in builder_links"
        :key="index"
        @click="navTo(nav_link.route)"
      >
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-title
            :class="{['secondary--text']: $route.path == nav_link.route}"
          >{{ nav_link.label }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <!-- FAQ nav item -->
      <v-list-item @click="navTo('/FAQ')">
        <v-list-item-action>
          <v-icon>mdi-comment-question</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>FAQ</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  props: {
    drawer: Boolean,
  },
  data: () => ({
    // drawer: true,
    isActive: false,
    playing_links: [
      {
        label: "Conduct",
        route: "/playing/conduct",
      },
      {
        label: "Communication",
        route: "/playing/communication",
      },
      {
        label: "Formulas",
        route: "/playing/formulas",
      },
      {
        label: "Classes",
        route: "/playing/classes",
      },
      {
        label: "Items",
        route: "/playing/items",
      },
      {
        label: "Quests",
        route: "/playing/quests",
      },
      {
        label: "Experience",
        route: "/playing/experience",
      },
    ],
    builder_links: [
      {
        label: "Worlds",
        route: "/building/worlds",
      },
      {
        label: "Commands",
        route: "/building/commands",
      },
      {
        label: "Conditions",
        route: "/building/conditions",
      },
      {
        label: "Doors",
        route: "/building/doors",
      },
      {
        label: "Factions",
        route: "/building/factions",
      },
      {
        label: "Facts",
        route: "/building/facts",
      },
      {
        label: "Items",
        route: "/building/items",
      },
      {
        label: "Item Actions",
        route: "/building/itemactions",
      },
      {
        label: "Loading",
        route: "/building/loading",
      },
      {
        label: "Mobs",
        route: "/building/mobs",
      },
      {
        label: "Mob Items",
        route: "/building/mobs/items",
      },
      {
        label: "Mob Reactions",
        route: "/building/mobs/reactions",
      },
      {
        label: "Moderation",
        route: "/building/moderation",
      },
      {
        label: "Quests",
        route: "/building/quests",
      },
      {
        label: "Room Actions",
        route: "/building/roomactions",
      },
      {
        label: "Room Checks",
        route: "/building/roomchecks",
      },
    ],
  }),
  methods: {
    navTo(route) {
      if (route === this.$router.currentRoute.fullPath) {
        return;
      }
      this.$router.push({ path: route });
    },
  },
};
</script>
