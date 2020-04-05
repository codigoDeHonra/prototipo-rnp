<template>
  <div class="grey lighten-4">
    <v-container fluid>
      <v-col sm="12">
        <h1
          class="font-weight-thin align-center blue-grey--text darken-2 text-center"
        >SaaS - Redes Colaborativas</h1>
      </v-col>
      <v-row no-gutters justify="center">
        <v-col cols="9">
          <v-row justify="center">
            <v-col v-for="ferramenta in 8" :key="ferramenta" cols="12" sm="3">
              <PlanoComponent
                :titulo="saas_redes_colaborativas.titulo"
                :subtitulo="saas_redes_colaborativas.subtitulo"
                :items="saas_redes_colaborativas.items"
                :btn_acao="saas_redes_colaborativas.action"
              ></PlanoComponent>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PlanoComponent from "../PlanoComponent.vue";

export default {
  name: "SaasRedesColaborativas",
  components: {
    PlanoComponent: PlanoComponent
  },
  data: () => ({
  }),
  computed: {
    saas_redes_colaborativas() {
      return this.$store.state.catalogo.saas_redes_colaborativas[0];
    }
  }
};
</script>
