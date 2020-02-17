import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    catalogo: {
      saas_utilidades_gerais: [
        {
          titulo: 'ConferênciaWeb',
          subtitulo: 'Rede social de video-conferências.',
          status: true,
          items: [
            {
              text: "serviço online", icon: "mdi-checkbox-marked-circle",
              subtext: "", style: { color: 'green' }
            },
            {
              text: "assinatura ativa", icon: "mdi-checkbox-marked-circle",
              subtext: "Gerenciar Assinatura", style: { color: 'green' }
            },
            {
              text: "solicitações abertas", icon: "4",
              subtext: "Solicitações de acesso", style: { color: 'orange' }
            },
          ]
        },
        {
          titulo: 'EduDrive',
          subtitulo: 'Armazenamento na nuvem, com app mobile.',
          status: false,
          items: [
            {
              text: "serviço online", icon: "mdi-checkbox-marked-circle",
              subtext: "", style: { color: 'green' }
            },
            {
              text: "gratuito para CAPES", icon: "mdi-checkbox-marked-circle",
              subtext: "Gerenciar serviço", style: { color: 'green' }
            },
            {
              text: "acessos limitados", icon: "mdi-checkbox-marked-circle",
              subtext: "", style: { color: 'green' }
            },
          ]
        },
        {
          titulo: 'FileSender',
          subtitulo: 'Envio seguro de arquivos grandes, até 20Gb.',
          status: false,
          items: [
            {
              text: "serviço online", icon: "mdi-checkbox-marked-circle",
              subtext: "", style: { color: 'green' }
            },
            {
              text: "gratuito para CAPES", icon: "mdi-checkbox-marked-circle",
              subtext: "Gerenciar serviço", style: { color: 'green' }
            },
            {
              text: "acessos limitados", icon: "mdi-checkbox-marked-circle",
              subtext: "", style: { color: 'green' }
            },
          ]
        },
        {
          titulo: 'Períodico Capes',
          subtitulo: 'Maior base de periódicos científicos do Brasil.',
          status: false,
          items: [
            {
              text: "serviço online", icon: "mdi-checkbox-marked-circle",
              subtext: "", style: { color: 'green' }
            },
            {
              text: "gratuito para CAPES", icon: "mdi-checkbox-marked-circle",
              subtext: "Gerenciar serviço", style: { color: 'green' }
            },
            {
              text: "acessos limitados", icon: "mdi-checkbox-marked-circle",
              subtext: "", style: { color: 'green' }
            },
          ]
        },
        {
          titulo: 'Solidariedade',
          subtitulo: 'Compartilhamento de recursos de pesquisa.',
          status: false,
          items: [
            {
              text: "serviço online", icon: "mdi-checkbox-marked-circle",
              subtext: "", style: { color: 'green' }
            },
            {
              text: "gratuito para CAPES", icon: "mdi-checkbox-marked-circle",
              subtext: "Gerenciar serviço", style: { color: 'green' }
            },
            {
              text: "acessos limitados", icon: "mdi-checkbox-marked-circle",
              subtext: "", style: { color: 'green' }
            },
          ]
        },
        {
          titulo: 'Video@RNP',
          subtitulo: 'Videoteca de ensino, pesquisa, saúde e cultura.',
          status: false,
          items: [
            {
              text: "serviço online", icon: "mdi-checkbox-marked-circle",
              subtext: "", style: { color: 'green' }
            },
            {
              text: "gratuito para CAPES", icon: "mdi-checkbox-marked-circle",
              subtext: "Gerenciar serviço", style: { color: 'green' }
            },
            {
              text: "acessos limitados", icon: "mdi-checkbox-marked-circle",
              subtext: "", style: { color: 'green' }
            },
          ]
        },
        {
          titulo: 'Videoaula@RNP',
          subtitulo: 'Repositório de aulas em vídeo sob demanda.',
          status: false,
          items: [
            {
              text: "serviço online", icon: "mdi-checkbox-marked-circle",
              subtext: "", style: { color: 'green' }
            },
            {
              text: "gratuito para CAPES", icon: "mdi-checkbox-marked-circle",
              subtext: "Gerenciar serviço", style: { color: 'green' }
            },
            {
              text: "acessos limitados", icon: "mdi-checkbox-marked-circle",
              subtext: "", style: { color: 'green' }
            },
          ]
        }
      ]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
