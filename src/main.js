import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";
import VeeValidate from "vee-validate";
import "./directives/Transform";
import msg from './pt_BR';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.js";

Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.http.options.root = process.env.API_URL
  ? process.env.API_URL
  : "http://localhost:3000";

// Vue.http.interceptors.push((req, next) => {
//   // é possível colocar informações no header antes do envio da requisição
//   req.headers.set("Authorization", "informação de segurança aqui");
//   console.log("Lidando com o request");

//   next(res => {
//     console.log("Lidando com a resposta");
//     // é possível acessar os dados da reposta e realizar transformações antes
//     console.log(res.body);
//   });
// });

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
