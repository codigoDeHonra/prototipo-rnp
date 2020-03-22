<template>
  <div class="grey lighten-2">
    <v-container fluid>
      <v-col sm="12">
        <h1
          class="sub font-weight-thin align-center blue-grey--text darken-2 text-center"
        >SaaS - Ferramentas Científicas</h1>
      </v-col>
      <v-row style="width: 100%" no-gutters justify="center">
        <v-col
          v-for="(ferramenta, index) in items"
          :key="index"
          cols="12"
          sm="3">
          <PlanoComponent
            :titulo="ferramenta.node.title"
            :subtitulo="ferramenta.node.Body"
            :items="saas_ferramenta.items"
            :img="ferramenta.node.Logo.src"
            :link="linkAdjust(ferramenta.node.Path)"
          ></PlanoComponent>
        </v-col>
      </v-row>
    </v-container>
    <!--v-stepper non-linear class="transparent">
      <v-stepper-header>
        <v-divider></v-divider>

        <v-stepper-step step="18">
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
  name: "SaasFerramentasCientificas",
  components: {
    PlanoComponent: PlanoComponent
  },
  data: () => ({
    saas_ferramenta: {
      titulo: "MATLAB",
      subtitulo: "Cras justo odio, dapibus ac facilisis in, egestas eget ...",
      items: [
        {
          text: "serviço online",
          icon: "mdi-checkbox-marked-circle",
          subtext: "",
          style: { color: "green" }
        },
        {
          text: "assinatura ativa",
          icon: "mdi-checkbox-marked-circle",
          subtext: "Gerenciar assinatura",
          style: { color: "green" }
        },
        {
          text: "solicitações abertas",
          icon: "1",
          subtext: "solicitações de acesso",
          style: { color: "green" }
        }
      ]
    }
  }),
  props:[ 'items' ],
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
