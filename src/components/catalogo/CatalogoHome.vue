<template>
  <div>
    <v-container>
      <v-col sm="6" offset="4">
        <h1 class="font-weight-thin align-center blue-grey--text darken-2">SaaS - Utilidades Gerais</h1>
      </v-col>
      <v-row no-gutters>
        <v-col v-for="n in 4" :key="n" cols="12" sm="3">
          <PlanoComponent></PlanoComponent>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PlanoComponent from "../../components/PlanoComponent.vue";

export default {
  name: "CatalogoHome",
  components: {
    PlanoComponent: PlanoComponent
  },
  data: () => ({
    planos: [1, 2, 3, 4]
  })
};
</script>
