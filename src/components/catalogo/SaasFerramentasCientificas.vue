<template>
  <div class="grey lighten-2">
    <v-container fluid>
      <v-col sm="12">
        <h1
          class="font-weight-thin align-center blue-grey--text darken-2 text-center"
        >SaaS - Ferramentas Científicas</h1>
      </v-col>
      <v-row no-gutters justify="center">
        <v-col v-for="ferramenta in 3" :key="ferramenta" cols="12" sm="3">
          <PlanoComponent
            :titulo="saas_ferramenta.titulo"
            :subtitulo="saas_ferramenta.subtitulo"
            :items="saas_ferramenta.items"
          ></PlanoComponent>
        </v-col>
      </v-row>
    </v-container>
    <v-stepper non-linear class="transparent">
      <v-stepper-header>
        <v-divider></v-divider>

        <v-stepper-step step="18">
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
  })
};
</script>
