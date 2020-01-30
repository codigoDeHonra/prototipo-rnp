<template>
  <div class="grey lighten-4 grey--text pa-4">
    <div class="display-1 font-weight-thin">Carrinho de Compras</div>
    <div class="title font-weight-regular pa-2">Serviços SaaS</div>
    <v-divider class="pb-3"></v-divider>
      <ItemCarrinhoComponent v-for="item in 4" :key="item"></ItemCarrinhoComponent>
  </div>
</template>

<script>
import ItemCarrinhoComponent from "../../components/ItemCarrinhoComponent.vue";

export default {
  name: "Carrinho",
  components: {
    ItemCarrinhoComponent
  },
  data: () => ({
  })
};
</script>
