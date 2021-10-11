<template>
  <button
    @click="disparaAcao()"
    class="botao"
    :class="estiloDoBotao"
    :type="titulo"
  >
    {{ rotulo }}
  </button>
</template>

<script>
export default {
  props: ["tipo", "rotulo", "confirmacao", "estilo"],
  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Confirma operação?")) {
          this.$emit("botaoAtivado");
        }
        return;
      } else {
        this.$emit("botaoAtivado");
      }
    },
  },

  computed: {
    estiloDoBotao() {
      if (this.estilo == "padrao" || !this.estilo) return "botao-padrao";
      if (this.estilo == "perigo") return "botao-perigo";
    },
  },
};
</script>

<style scoped>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: blue;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>