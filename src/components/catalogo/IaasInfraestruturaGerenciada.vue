<template>
  <div class="blue darken-2">
    <v-container fluid>
      <v-col sm="12">
        <h1
          class="font-weight-light align-center white--text text-center"
        >IaaS - Infraestrutura gerenciada</h1>
      </v-col>
      <v-row no-gutters justify="center">
        <v-col cols="9">
          <v-row justify="center">
            <v-col v-for="(ferramenta, key) in iaas_infraestrutura_gerenciada" :key="key" cols="3">
              <PlanoComponent
                :titulo="ferramenta.titulo"
                :subtitulo="ferramenta.subtitulo"
                :items="ferramenta.items"
                :status_plano="ferramenta.btn_status"
                :status_card="ferramenta.status_card"
                :btn_acao="ferramenta.action"
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
  name: "IaasInfraestruturaGerenciada",
  components: {
    PlanoComponent: PlanoComponent
  },
  data: () => ({
  }),
  computed: {
    iaas_infraestrutura_gerenciada() {
      return this.$store.state.catalogo.iaas_infraestrutura_gerenciada;
    }
  },
};
</script>
<style scoped>
.card-plano {
  height: 350px !important;
}
</style>
