<template>
  <div class="grey lighten-4">
    <v-container fluid>
      <v-col sm="12">
        <h1
          class="font-weight-thin align-center blue-grey--text darken-2 text-center"
        >SaaS - Redes Colaborativas</h1>
      </v-col>
      <v-row no-gutters justify="center">
        <v-col v-for="ferramenta in 3" :key="ferramenta" cols="12" sm="3">
          <PlanoComponent
            :titulo="saas_redes_colaborativas.titulo"
            :subtitulo="saas_redes_colaborativas.subtitulo"
            :items="saas_redes_colaborativas.items"
          ></PlanoComponent>
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
    saas_redes_colaborativas: {
      titulo: "ORCID",
      subtitulo: "Praesent commodo cursus magna, vel scelerisque",
      items: [
        {
          text: "serviço online",
          icon: "mdi-checkbox-marked-circle",
          subtext: "",
          style: { color: "green" }
        },
        {
          text: "gratuito para CAPES",
          icon: "mdi-checkbox-marked-circle",
          subtext: "Gerenciar assinatura",
          style: { color: "green" }
        },
        {
          text: "acesos ilimitados",
          icon: "mdi-checkbox-marked-circle",
          subtext: "solicitações de acesso",
          style: { color: "green" }
        }
      ]
    }
  })
};
</script>
