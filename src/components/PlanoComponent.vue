<template>
  <v-card class="mx-auto" max-width="250">
    <v-img
      class="white--text align-end ma-4"
      height="130px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    ></v-img>
    <v-divider></v-divider>

    <v-card-title class="light-blue--text accent-4">ConferênciaWeb</v-card-title>
    <v-card-subtitle class="pb-0">Rede social de video-conferencias.</v-card-subtitle>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon" color="success"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text" class="success--text"></v-list-item-title>
            <div class="font-weight-bold caption ml-1 light-blue--text accent-4">{{ item.subtext }}</div>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="white" class="text-uppercase light-blue" text>Obter seu acesso</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PlanoComponent",

  data: () => ({
    items: [
      {
        text: "serviço online",
        icon: "mdi-checkbox-marked-circle",
        subtext: ""
      },
      {
        text: "assinatura ativa",
        icon: "mdi-checkbox-marked-circle",
        subtext: "Gerenciar Assinatura"
      },
      {
        text: "solicitações abertas",
        icon: "4",
        subtext: "Gerenciar Assinatura"
      }
    ]
  })
};
</script>
