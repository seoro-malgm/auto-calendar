import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./styles/index.scss";

const urls = {
  sheet: `https://docs.google.com/spreadsheets/d/1gQZupnOU3mKQLSQ7kiml7RwW4MOdloKhBPtg0vNInx0/edit?usp=sharing`,
};
Vue.prototype.$urls = urls;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
