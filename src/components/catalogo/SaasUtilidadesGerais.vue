<template>
  <div class="grey lighten-4">
    <v-container fluid>
      <v-col sm="12">
        <h1
          class="font-weight-thin align-center blue-grey--text darken-2 text-center"
        >SaaS - Utilidades Gerais</h1>
      </v-col>
      <v-row no-gutters justify="center">
        <v-col cols="7">
          <v-row justify="center">
            <v-col v-for="plano in saas_utilidades_gerais" :key="plano" cols="3" align-self="center">
              <PlanoComponent
                :titulo="plano.titulo"
                :subtitulo="plano.subtitulo"
                :items="plano.items"
                :status_plano="plano.status"
              ></PlanoComponent>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-stepper non-linear class="transparent">
      <v-stepper-header>
        <v-divider></v-divider>

        <v-stepper-step step="2" class="servicos-nao-assinados">
          serviços não assinados
          <small class="blue--text">Exibir serviços</small>
        </v-stepper-step>
        <v-divider></v-divider>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script>
import PlanoComponent from "../PlanoComponent.vue";

export default {
  name: "SaasUtilidadesGerais",
  components: {
    PlanoComponent: PlanoComponent
  },
  computed: {
    saas_utilidades_gerais() {
      return this.$store.state.catalogo.saas_utilidades_gerais;
    }
  },
  data: () => ({})
};
</script>
