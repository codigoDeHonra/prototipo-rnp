<template>
  <div class="grey lighten-4 grey--text pa-4">
    <v-container>
      <v-row justify="center">
        <v-col cols="11">
          <div class="display-1 font-weight-thin pa-2">Carrinho de Compras</div>
          <div class="title font-weight-regular pa-2">Serviços SaaS</div>
          <v-divider class="pb-3"></v-divider>
          <ItemCarrinhoComponent v-for="item in 2" :key="item"></ItemCarrinhoComponent>

          <div class="title font-weight-regular pa-2">Serviços IaaS</div>
          <v-divider class="pb-3"></v-divider>
          <ItemCarrinhoComponent></ItemCarrinhoComponent>
          <v-row justify="end">
            <v-col cols="12">
              <v-btn text small color="blue lighten-1">Adicionar mais itens</v-btn>
            </v-col>
            <v-col cols="2">
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="subheading">Total de impostos</v-list-item-title>
                  <v-list-item-title class="subheading font-weight-bold">R$ 0,00</v-list-item-title>
                  <v-list-item-title class="caption font-weight-thin"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="2">
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="subheading">Valor Total</v-list-item-title>
                  <v-list-item-title class="subheading font-weight-bold">R$ 1.782,00</v-list-item-title>
                  <v-list-item-title class="caption font-weight-thin">Cobrança Mensal</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="4" offset="6">
              <v-list-item>
                <v-list-item-title>
                  <v-btn block color="blue lighten-1" class="white--text">Prosseguir para pagamento</v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ItemCarrinhoComponent from "../../components/ItemCarrinhoComponent.vue";

export default {
  name: "Carrinho",
  components: {
    ItemCarrinhoComponent
  },
  data: () => ({})
};
</script>
