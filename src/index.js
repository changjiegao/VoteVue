import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/test.css";
import "./assets/styles/test-stylus.styl";
// import "./assets/images/bg.jpg";

const root = document.createElement("div");
document.body.appendChild(root);

new Vue({
  render: (h) => h(App),
  router,
}).$mount(root);
