<template>
  <v-card class="mx-auto" max-width="250" max-height="460">
    <div class="white--text align-end pt-4 ma-4">
      <v-img
        class="white--text align-end"
        height="120px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      ></v-img>
    </div>
    <v-divider></v-divider>

    <v-card-title class="light-blue--text accent-4">{{ titulo }}</v-card-title>
    <v-card-subtitle class="pb-0">{{ subtitulo }}</v-card-subtitle>
    <v-list dense>
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
    </v-list>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn v-if="status_plano" color="white" class="text-uppercase green" text>acessar serviço</v-btn>
      <v-btn v-else color="white" class="text-uppercase light-blue" text>Obter seu acesso</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PlanoComponent",
  props: {
    titulo: { type: Object },
    subtitulo: { type: Object },
    items: { type: Object },
    status_plano: { type: Boolean, default: false },
  },
  data: () => ({})
};
</script>
