<template>
  <div class="grey lighten-4 pa-3">
    <v-card class="d-inline-block mx-auto" width="100%">
      <v-container>
        <v-row justify="space-between text-left pl-0">
          <v-col cols="1">
            <v-img
              src="https://www.microtelit.com.br/wp-content/uploads/2019/10/Logo-Office-365.jpeg"
            ></v-img>
          </v-col>
          <v-col cols="4">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="subtitle-2 font-weight-light">Office 365</div>
                <div
                  class="subtitle-1 font-weight-bold"
                >99 Contas Office 365 for Education para usuários finais</div>
                <div class="overline ma-0">
                  <v-btn text small class="blue--text">Alterar</v-btn>
                  <v-btn text small class="blue--text">Remover</v-btn>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-col>

          <v-col cols="2">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="subheading">Valor unitário</v-list-item-title>
                <v-list-item-title class="subheading font-weight-bold">R$ 99,00</v-list-item-title>
                <v-list-item-title class="caption font-weight-thin">Cobrança Mensal</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="2">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="subheading">
                  Impostos
                  <v-btn text icon>
                    <span class="group pa-2">
                    <v-icon width="1" color="grey" light>mdi-help</v-icon>
                    </span>
                  </v-btn>
                </v-list-item-title>
                <v-list-item-title class="subheading font-weight-bold">R$ 0,00</v-list-item-title>
                <v-list-item-title class="caption font-weight-thin"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="2">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="subheading">Sub-total</v-list-item-title>
                <v-list-item-title class="subheading font-weight-bold">R$ 891,00</v-list-item-title>
                <v-list-item-title class="caption font-weight-thin">Cobrança Mensal</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ItemCarrinhoComponent",
  components: {},
  data: () => ({})
};
</script>
