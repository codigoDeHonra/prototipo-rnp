<template>
  <div class="blue darken-2">
    <v-container fluid>
      <v-col sm="12">
        <h1
          class="font-weight-light align-center white--text text-center"
        >IaaS - Infraestrutura gerenciada</h1>
      </v-col>
      <v-row no-gutters justify="center">
        <v-col v-for="ferramenta in 4" :key="ferramenta" cols="12" sm="3">
          <PlanoComponent
            :titulo="iaas_infraestrutura_gerenciada.titulo"
            :subtitulo="iaas_infraestrutura_gerenciada.subtitulo"
            :items="iaas_infraestrutura_gerenciada.items"
          ></PlanoComponent>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PlanoComponent from "../PlanoComponent.vue";

export default {
  name: "IaasInfraestruturaGerenciada",
  components: {
    PlanoComponent: PlanoComponent
  },
  data: () => ({
    iaas_infraestrutura_gerenciada: {
      titulo: "Amazon AWS",
      subtitulo: "Maecenas sed diam eget risus varius blandit sit...",
      items: [
        {
          text: "pilhas criadas",
          icon: "4",
          subtext: "Visão geral - Gerenciar",
          style: { color: "green" }
        }
      ]
    }
  })
};
</script>
