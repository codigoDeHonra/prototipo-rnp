<template>
  <div class="blue darken-2">
    <v-container fluid>
      <v-col sm="12">
        <h1
          class="sub font-weight-light align-center white--text text-center"
        >IaaS - Infraestrutura gerenciada</h1>
      </v-col>
      <v-row style="width: 100%" no-gutters justify="center">
        <v-col v-for="(ferramenta, index) in items" :key="index" cols="12" sm="3">
          <PlanoComponent
            :titulo="iaas_infraestrutura_gerenciada.titulo"
            :subtitulo="iaas_infraestrutura_gerenciada.subtitulo"
            :items="iaas_infraestrutura_gerenciada.items"
            :link="ferramenta.node.Path"
            :img="ferramenta.node.Logo.src"
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
  }),
  props:[ 'items' ],
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
