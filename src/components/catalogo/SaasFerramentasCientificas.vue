<template>
  <div class="grey lighten-2">
    <v-container fluid>
      <v-col sm="12">
        <h1
          class="font-weight-thin align-center blue-grey--text darken-2 text-center"
        >SaaS - Ferramentas Científicas</h1>
      </v-col>
      <v-row no-gutters justify="center">
        <v-col cols="9">
          <v-row justify="center">
            <v-col v-for="(ferramenta, key) in 3" :key="key" cols="3" align-self="center">
              <PlanoComponent
                :titulo="saas_ferramentas_cientificas.titulo"
                :subtitulo="saas_ferramentas_cientificas.subtitulo"
                :items="saas_ferramentas_cientificas.items"
                :btn_acao="saas_ferramentas_cientificas.action"
              ></PlanoComponent>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-stepper non-linear class="transparent elevation-0">
      <v-stepper-header>
        <v-divider></v-divider>
        <v-stepper-step step="18" class="title">
          <span class="font-weight-thin ml-1">serviços não assinados</span>
          <small class="blue--text ml-11 mt-1">Exibir serviços</small>
        </v-stepper-step>
        <v-divider></v-divider>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script>
import PlanoComponent from "../PlanoComponent.vue";

export default {
  name: "SaasFerramentasCientificas",
  components: {
    PlanoComponent: PlanoComponent
  },
  data: () => ({
  }),
  computed: {
    saas_ferramentas_cientificas() {
      return this.$store.state.catalogo.saas_ferramentas_cientificas[0];
    }
  }
};
</script>
