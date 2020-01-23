<template>
  <div class="grey lighten-4">
    <v-container fluid>
      <v-col sm="6" offset="4">
        <h1 class="font-weight-thin align-center blue-grey--text darken-2">SaaS - Utilidades Gerais</h1>
      </v-col>
      <v-row no-gutters justify="center">
        <v-col v-for="plano in planos" :key="plano" cols="12" sm="3">
          <PlanoComponent
          :titulo="plano.titulo"
          :subtitulo="plano.subtitulo"
          :items="plano.items"
          ></PlanoComponent>
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
  computed: {
    planos () {
      return this.$store.state.catalogo.planos
    }
  },
  data: () => ({
  })
};
</script>
