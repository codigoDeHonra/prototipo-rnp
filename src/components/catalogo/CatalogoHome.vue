<template>
  <div class="grey lighten-4">
    <SaasUtilidadesGerais></SaasUtilidadesGerais>
    <SaasFerramentasCientificas></SaasFerramentasCientificas>
    <SaasRedesColaborativas></SaasRedesColaborativas>
    <IaasInfraestruturaGerenciada></IaasInfraestruturaGerenciada>
  </div>
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
  data: () => ({
  })
};
</script>
