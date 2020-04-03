import Vue from "vue";
import Router from "vue-router";
//import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue")
    },

    // Playing
    {
      path: "/playing",
      name: "playing",
      component: () => import("@/views/playing/Index.vue")
    },
    {
      path: "/playing/formulas",
      name: "formulas",
      component: () => import("@/views/playing/Formulas.vue")
    },
    {
      path: "/playing/classes",
      name: "classes",
      component: () => import("@/views/playing/Classes.vue")
    },
    {
      path: "/playing/items",
      name: "items",
      component: () => import("@/views/playing/Items.vue")
    },
    {
      path: "/playing/quests",
      name: "quests",
      component: () => import("@/views/playing/Quests.vue")
    },
    {
      path: "/playing/experience",
      name: "experience",
      component: () => import("@/views/playing/Experience.vue")
    },

    // Building
    {
      path: "/building",
      name: "building",
      component: () => import("@/views/building/Index.vue")
    },
    {
      path: "/building/factions",
      name: "building_factions",
      component: () => import("@/views/building/Factions.vue")
    },
    {
      path: "/building/roomchecks",
      name: "building_room_checks",
      component: () => import("@/views/building/RoomCheck.vue")
    },
    {
      path: "/building/quests",
      name: "building_quests",
      component: () => import("@/views/building/Quests.vue")
    },
    {
      path: "/building/mobs",
      name: "building_mobs",
      component: () => import("@/views/building/Mobs.vue")
    },
    {
      path: "/building/mobs/items",
      name: "building_mob_items",
      component: () => import("@/views/building/MobItems.vue")
    },
    {
      path: "/building/mobs/reactions",
      name: "building_mob_reactions",
      component: () => import("@/views/building/MobReactions.vue")
    },
    {
      path: "/building/doors",
      name: "doors",
      component: () => import("@/views/building/Doors.vue")
    },
    {
      path: "/building/items",
      name: "building_items",
      component: () => import("@/views/building/Items.vue")
    },
    //FAQ
    {
      path: "/FAQ",
      name: "FAQ",
      component: () => import("@/views/FAQ.vue")
    }
  ]
});
