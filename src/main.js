import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

const API_BASE = "https://api.writtenrealms.com/api/v1";

// Axios config
import axios from "axios";
const axiosSetup = axios => {
  axios.defaults.baseURL = API_BASE;
};
axiosSetup(axios);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
