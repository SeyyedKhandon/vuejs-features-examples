import Vue from "vue";
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
