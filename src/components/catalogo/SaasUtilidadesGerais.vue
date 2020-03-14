<template>
  <div class="grey lighten-4">
    <v-container fluid>
      <v-col sm="12">
        <h1
          class="sub font-weight-thin align-center blue-grey--text darken-2 text-center"
        >SaaS - Utilidades Gerais</h1>
      </v-col>
      <v-row
        v-if="items.length"
        no-gutters
        align="center"
        justify="center"
        style="width: 100%"
      >
        <v-col
          v-for="(plano, index) in items"
          :key="index"
          cols="3">
          <PlanoComponent
            :titulo="plano.node.title"
            :subtitulo="plano.node.Body"
            :items="plano.items"
            :status_plano="plano.status"
            :img="plano.node.Logo.src"
            :link="plano.node.Path"
          ></PlanoComponent>
        </v-col>
      </v-row>
    </v-container>

    <!--v-stepper non-linear class="transparent">
      <v-stepper-header>
        <v-divider></v-divider>

        <v-stepper-step step="2">
          serviços não assinados
          <small class="blue--text">Exibir serviços</small>
        </v-stepper-step>
        <v-divider></v-divider>
      </v-stepper-header>
    </v-stepper-->
  </div>
</template>

<script>
import PlanoComponent from "../PlanoComponent.vue";

export default {
  name: "SaasUtilidadesGerais",
  components: {
    PlanoComponent: PlanoComponent
  },
  props:[ 'items' ],
  computed: {
    saas_utilidades_gerais() {
      return this.$store.state.catalogo.saas_utilidades_gerais;
    }
  },
  data: () => ({})
};
</script>
<style scoped>
 div#catalogo.v-application h1.sub {
  display: block;
  font-size: 2em;
  font-weight: bold;
  margin-block-start: .67em;
  margin-block-end: .67em;
}
</style>
