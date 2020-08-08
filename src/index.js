import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/test.css";
import "./assets/styles/test-stylus.styl";

import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

const root = document.createElement("div");
document.body.appendChild(root);

new Vue({
  render: (h) => h(App),
  router,
}).$mount(root);
