<template>
  <div class="pa-0 ">
    <v-container fluid class="pa-0">
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
          cols="12"
          lg="3"
          md="3"
          sm="3"
          class=""
          >
          <PlanoComponent
            :titulo="plano.node.title"
            :subtitulo="plano.node.Body"
            :items="plano.items"
            :status_plano="plano.status"
            :img="plano.node.Logo.src"
            :link="linkAdjust(plano.node.Path)"
            class="mx-auto"
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
  data: () => ({}),
  methods:{
    linkAdjust(link){
      //console.log(link)
      return link.replace('/cms/en','/cms')
    }
  }
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
