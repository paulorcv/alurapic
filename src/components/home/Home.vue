<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    <input
      type="search"
      class="filtro"
      placeholder="filtre por parte do título"
      @input="filtro = $event.target.value"
    />
    <ul>
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto._id">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva
            :url="foto.url"
            :titulo="foto.titulo"
            v-meu-transform:scale.animate="1.2"
          />
          <router-link :to="{ name: 'altera', params: { id: foto._id } }">
            <meu-botao rotulo="ALTERAR" tipo="button" />
          </router-link>
          <meu-botao
            tipo="button"
            rotulo="REMOVER"
            @botaoAtivado="remove(foto)"
            :confirmacao="true"
            estilo="perigo"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import transform from "../../directives/Transform";
import FotoService from "../../domain/FotoService";

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },
  directives: {
    "meu-transform": transform,
  },

  data() {
    return {
      titulo: "Alurapic",
      fotos: [],
      filtro: "",
      mensagem: "",
    };
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");

        return this.fotos.filter((foto) => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    },
  },

  methods: {
    remove(foto) {
      // a chave do objeto é o parâmetro usando no endereço do recurso

      this.service.apaga(foto._id).then(
        () => {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
          this.mensagem = "Foto removida com sucesso";
        },
        (err) => {
          this.mensagem = err.message;
        }
      );
    },
  },

  created() {
    this.service = new FotoService(this.$resource);

    this.service.lista().then(
      (fotos) => (this.fotos = fotos),
      (err) => (this.mensagem = err.message)
    );
  },
};
</script>
  

<style>
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
