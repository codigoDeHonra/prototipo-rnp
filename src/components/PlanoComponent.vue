<template>
  <v-card class="card-plano" min-width="220" height="435">
    <div class="white--text align-end pt-4 ma-4">
      <v-img
        class="white--text align-end"
        height="120px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      ></v-img>
    </div>
    <v-divider></v-divider>

    <v-card-title class="light-blue--text accent-4">
      <span class="subtitle-1 font-weight-medium">{{ titulo }}</span>
    </v-card-title>
    <v-card-subtitle class="pb-0">{{ subtitulo }}</v-card-subtitle>
    <v-list dense>
      <v-list-item-group color="primary" class="group-item-plano">
        <v-list-item v-for="(item, i) in items" :key="i" class="items-plano">
          <v-list-item-icon class="item-plano">
            <v-icon v-text="item.icon" color="success" class="icone-plano"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-bind:style="item.style"
              v-text="item.text"
              class="font-weight-light"
            ></v-list-item-title>
            <div
              v-if="item.subtext"
              class="font-weight-bold caption light-blue--text accent-4"
            >{{ item.subtext }}</div>
            <div v-else></div>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        v-if="status_plano"
        color="white"
        class="text-uppercase green"
        text
        small
        width="90%"
        height="32"
      >acessar serviço</v-btn>
      <v-btn
        v-else
        color="white"
        class="text-uppercase light-blue"
        text
        small
        width="90%"
        height="32"
      >Obter seu acesso</v-btn>
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
    status_plano: { type: Boolean, default: false }
  },
  data: () => ({})
};
</script>

<style scoped>
.item-plano {
  margin-right: 2px !important;
}
.icone-plano {
  font-size: 20px !important;
}
.items-plano {
  margin-top: -10px;
  height: 50px;
}
.group-items-plano {
  height: 128px;
}
</style>