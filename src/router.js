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
    }
  ]
});
