<template>
  <v-menu offset-y min-width="500" >
    <template v-slot:activator="{ on }">
      <v-btn
        color="black"
        dark
        v-on="on"
       text
        >
        <v-icon>mdi-view-comfy</v-icon>
      </v-btn>
    </template>
    <v-card>
    <v-subheader>Serviços nas Nuvens</v-subheader>
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            <v-card min-height="50" min-width="190" max-height="50" max-width="190">
              <v-img min-height="50" min-width="190" max-height="50" max-width="190"
                src="https://picsum.photos/510/300?random" aspect-ratio="1"></v-img>
            </v-card>
          </v-col>
          <v-col>
            <v-card min-height="50" min-width="190" max-height="50" max-width="190">
              <v-img min-height="50" min-width="190" max-height="50" max-width="190"
                src="https://picsum.photos/510/300?random" aspect-ratio="1"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <v-card min-height="50" min-width="190" max-height="50" max-width="190">
              <v-img min-height="50" min-width="190" max-height="50" max-width="190"
                src="https://picsum.photos/510/300?random" aspect-ratio="1"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  name: "Cubo",
  data() {
    return {
    }
  }
}
</script>
<style>
  .v-application--wrap {
    min-height: initial;
  }
</style>
