<template>
  <div class="corpo">
    <nav>
      <ul>
        <li v-for="route in routes">
          <router-link :to="route.path ? route.path : '/'">{{
            route.titulo
          }}</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from "./routes";
import Painel from "./components/shared/painel/Painel.vue";
import ImagemResponsiva from "./components/shared/imagem-responsiva/ImagemResponsiva.vue";

export default {
  data() {
    return {
      routes,
    };
  },
};
</script>
  

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}
</style>
