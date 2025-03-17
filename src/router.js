import Vue from "vue";
import Router from "vue-router";
//import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },

    // Playing
    {
      path: "/playing",
      name: "playing",
      component: () => import("@/views/playing/Index.vue"),
    },
    {
      path: "/playing/conduct",
      name: "formulas",
      component: () => import("@/views/playing/Conduct.vue"),
    },
    {
      path: "/playing/communication",
      name: "communication",
      component: () => import("@/views/playing/Communication.vue"),
    },
    {
      path: "/playing/formulas",
      name: "formulas",
      component: () => import("@/views/playing/Formulas.vue"),
    },
    {
      path: "/playing/classes",
      name: "classes",
      component: () => import("@/views/playing/Classes.vue"),
    },
    {
      path: "/playing/items",
      name: "items",
      component: () => import("@/views/playing/Items.vue"),
    },
    {
      path: "/playing/quests",
      name: "quests",
      component: () => import("@/views/playing/Quests.vue"),
    },
    {
      path: "/playing/experience",
      name: "experience",
      component: () => import("@/views/playing/Experience.vue"),
    },

    // Building
    {
      path: "/building",
      name: "building",
      component: () => import("@/views/building/Index.vue"),
    },
    {
      path: "/building/worlds",
      name: "building_worlds",
      component: () => import("@/views/building/Worlds.vue"),
    },
    {
      path: "/building/worlds/publishing",
      name: "building_worlds_publishing",
      component: () => import("@/views/building/WorldsPublishing.vue"),
    },
    {
      path: "/building/commands",
      name: "building_commands",
      component: () => import("@/views/building/Commands.vue"),
    },
    {
      path: "/building/conditions",
      name: "building_conditions",
      component: () => import("@/views/building/Conditions.vue"),
    },
    {
      path: "/building/factions",
      name: "building_factions",
      component: () => import("@/views/building/Factions.vue"),
    },
    {
      path: "/building/facts",
      name: "building_facts",
      component: () => import("@/views/building/Facts.vue"),
    },
    {
      path: "/building/roomchecks",
      name: "building_room_checks",
      component: () => import("@/views/building/RoomCheck.vue"),
    },
    {
      path: "/building/roomactions",
      name: "building_room_actions",
      component: () => import("@/views/building/RoomActions.vue"),
    },
    {
      path: "/building/itemactions",
      name: "building_item_actions",
      component: () => import("@/views/building/ItemActions.vue"),
    },
    {
      path: "/building/quests",
      name: "building_quests",
      component: () => import("@/views/building/Quests.vue"),
    },
    {
      path: "/building/mobs",
      name: "building_mobs",
      component: () => import("@/views/building/Mobs.vue"),
    },
    {
      path: "/building/mobs/items",
      name: "building_mob_items",
      component: () => import("@/views/building/MobItems.vue"),
    },
    {
      path: "/building/loading",
      name: "building_loading",
      component: () => import("@/views/building/Loading.vue"),
    },
    {
      path: "/building/mobs/reactions",
      name: "building_mob_reactions",
      component: () => import("@/views/building/MobReactions.vue"),
    },
    {
      path: "/building/moderation",
      name: "building_moderation",
      component: () => import("@/views/building/Moderation.vue"),
    },
    {
      path: "/building/doors",
      name: "doors",
      component: () => import("@/views/building/Doors.vue"),
    },
    {
      path: "/building/items",
      name: "building_items",
      component: () => import("@/views/building/Items.vue"),
    },
    {
      path: "/building/socials",
      name: "building_socials",
      component: () => import("@/views/building/Socials.vue"),
    },
    {
      path: "/building/marks",
      name: "building_marks",
      component: () => import("@/views/building/Marks.vue"),
    },
    //FAQ
    {
      path: "/FAQ",
      name: "FAQ",
      component: () => import("@/views/FAQ.vue"),
    },
  ],
});
