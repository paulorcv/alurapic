import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";
// import "./directives/Transform";

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.http.options.root = 'http://localhost:3000';


new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
