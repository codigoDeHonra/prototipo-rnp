<template>
  <v-card
    class="mx-auto"
    max-width="231"
    max-height="237"
    min-width="231"
    min-height="237"
    :href="linkReal"
    tag="a"
  >
    <div class="white--text align-end pt-4 ma-4">
      <v-img
        class="white--text align-end"
        height="53px"
        :src="img"
      ></v-img>
    </div>
    <v-divider></v-divider>

    <v-card-title class="light-blue--text accent-4">{{ titulo }}</v-card-title>
    <v-card-subtitle class="text-card pb-0">{{ subtitulo }}</v-card-subtitle>

    <!--v-list dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon" color="success"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-bind:style="item.style"
              v-text="item.text"
              class="font-weight-light"
            ></v-list-item-title>
            <div class="font-weight-bold caption ml-1 light-blue--text accent-4">{{ item.subtext }}</div>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list-->

    <!--v-card-actions>
      <v-spacer></v-spacer>
      <v-btn v-if="status_plano" color="white" class="text-uppercase green" text>acessar serviço</v-btn>
      <v-btn v-else color="white" class="text-uppercase light-blue" text>Obter seu acesso</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions-->
  </v-card>
</template>

<script>
export default {
  name: "PlanoComponent",
  props: {
    titulo: { type: String, default: '' },
    subtitulo: { type: String, default: '' },
    items: { type: [Object, Array] },
    status_plano: { type: Boolean, default: false },
    link: { type: String, default: '' },
    img: { type: String, default: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
  },
  data: () => ({
  }),
  computed:{
    linkReal() {
      return `${process.env.VUE_APP_DOMAIN}${this.link}`
    }
  }
};
</script>
<style scoped>
#catalogo .text-card {
  overflow: hidden;
  max-height: 44px;
}
</style>
