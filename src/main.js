import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";
import VeeValidate from "vee-validate";
import "./directives/Transform";
import msg from './pt_BR';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.http.options.root = 'http://localhost:3000';

Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
