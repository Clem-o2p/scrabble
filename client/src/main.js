import Vue from "vue";
import VueDragDrop from "vue-drag-drop";
import store from "./store";
import App from "./App.vue";

Vue.use(VueDragDrop);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
