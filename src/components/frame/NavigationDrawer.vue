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

      <!-- <v-list-group prepend-icon="mdi-sword"> -->
      <!-- <template v-slot:activator>
        <v-list-item-title>Playing</v-list-item-title>
      </template> -->
      <v-list-item @click="navTo('/playing')">
        <v-icon>mdi-sword</v-icon>
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-title>Playing - Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        class="ml-2"
        v-for="nav_link in playing_links"
        :key="nav_link.route"
        @click="navTo(nav_link.route)"
      >
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-title>{{ nav_link.label }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- </v-list-group> -->

      <v-divider></v-divider>

      <!-- Building Links -->

      <!-- <v-list-group prepend-icon="mdi-wrench"> -->
      <!-- <template v-slot:activator>
        <v-list-item-title>Building</v-list-item-title>
      </template> -->
      <v-list-item @click="navTo('/building')">
        <v-icon>mdi-wrench</v-icon>
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-title>Building - Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        class="ml-2"
        v-for="(nav_link, index) in builder_links"
        :key="index"
        @click="navTo(nav_link.route)"
      >
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-title>{{ nav_link.label }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- </v-list-group> -->

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
    drawer: Boolean
  },
  data: () => ({
    // drawer: true,
    isActive: false,
    playing_links: [
      {
        label: "Items",
        route: "/playing/items"
      },
      {
        label: "Quests",
        route: "/playing/quests"
      },
      {
        label: "Experience",
        route: "/playing/experience"
      },
      {
        label: "Classes",
        route: "/playing/classes"
      }
    ],
    builder_links: [
      {
        label: "Items",
        route: "/building/items"
      },
      {
        label: "Mobs",
        route: "/building/mobs"
      },
      {
        label: "Mob Items",
        route: "/building/mobs/items"
      },
      {
        label: "Mob Reactions",
        route: "/building/mobs/reactions"
      },
      {
        label: "Factions",
        route: "/building/factions"
      },
      {
        label: "Room Checks",
        route: "/building/roomchecks"
      },
      {
        label: "Quests",
        route: "/building/quests"
      }
    ]
  }),
  methods: {
    navTo(route) {
      if (route === this.$router.currentRoute.fullPath) {
        return;
      }
      this.$router.push({ path: route });
    }
  }
};
</script>
