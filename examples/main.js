import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import LasiaUI from "../packages/index";
import "../packages/theme-chalk/index.less";
// 注册组件库
Vue.use(LasiaUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
