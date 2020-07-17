<template>
  <v-card
    class=" card-highlight"
    max-width="231"
    max-height="237"
    min-width="231"
    min-height="237"
    :href="linkReal"
    tag="a"
  >
    <div class="white--text align-end ma-0 pa-1 pt-2 d-flex"
       style="height:120px"
    >
      <v-img
        class="pa-0 white--text ma-auto align-end"
        max-height="80px"
        max-width="152px"
        contain
        aspect-ratio="1"
        :src="img"
      />
    </div>
    <v-divider class="ma-0"></v-divider>
    <v-card-title
      class="px-0 py-0 light-blue--text accent-4"
      style="
      height:55px;
      line-height:1.3rem;
      margin-right:20px;
      margin-left:20px;
      word-break:normal;
      "
    >
      {{ titulo }}
    </v-card-title>
    <v-card-subtitle
      class="text-card pa-0">
      {{ subtitulo }}
    </v-card-subtitle>
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
  /*display: block;*/
  height:44px;
/*  text-overflow: ellipsis ellipsis;*/
  margin-top: 0px;
  margin-left: 20px;
  margin-right: 20px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

#catalogo .card-highlight {
  text-decoration: none;
  border: 2px solid white;
  margin-bottom: 50px;
  text-align: left;
}

#catalogo .card-highlight:hover {
 border: 2px solid #1aa9f4;
}
</style>
