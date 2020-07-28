import Vue from "vue";
import axios from "axios";

import App from "./App";
import router from "./router";
import store from "./store";

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.openLink = (url) => {
  try {
    if (process.env_BUILD_TARGET !== "web") {
      require("electron").shell.openExternal(url);
    }
  } catch (e) {
    // for web (process is not defined)
    window.open(url);
  }
};

Vue.prototype.$openLink = Vue.openLink;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: "<App/>",
}).$mount("#app");
