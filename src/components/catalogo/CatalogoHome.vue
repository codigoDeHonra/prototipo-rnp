<template>
  <v-container class="grey lighten-4" fluid>
    <v-row>
      <v-col>
        <SaasUtilidadesGerais></SaasUtilidadesGerais>
        <SaasFerramentasCientificas></SaasFerramentasCientificas>
        <SaasRedesColaborativas></SaasRedesColaborativas>
        <IaasInfraestruturaGerenciada></IaasInfraestruturaGerenciada>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SaasUtilidadesGerais from "../../components/catalogo/SaasUtilidadesGerais.vue";
import SaasFerramentasCientificas from "../../components/catalogo/SaasFerramentasCientificas.vue";
import SaasRedesColaborativas from "../../components/catalogo/SaasRedesColaborativas.vue";
import IaasInfraestruturaGerenciada from "../../components/catalogo/IaasInfraestruturaGerenciada.vue";

export default {
  name: "CatalogoHome",
  components: {
    SaasUtilidadesGerais: SaasUtilidadesGerais,
    SaasFerramentasCientificas: SaasFerramentasCientificas,
    SaasRedesColaborativas: SaasRedesColaborativas,
    IaasInfraestruturaGerenciada: IaasInfraestruturaGerenciada
  },
  data: () => ({})
};
</script>
<style>
.servicos-nao-assinados {
  background: transparent !important;
  color: #424141 !important;
  font-size: 18px !important;
  margin-bottom: 12px !important;
  margin-right: 0px !important;
}
</style>
