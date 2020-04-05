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
          btn_status: true,
          card_status: false,
          action: 'Obter seu acesso',
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
          btn_status: false,
          card_status: false,
          action: 'Acessar serviço',
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
          btn_status: false,
          card_status: false,
          action: 'Acessar serviço',
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
          btn_status: false,
          card_status: false,
          action: 'Acessar serviço',
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
          btn_status: false,
          card_status: false,
          action: 'Acessar serviço',
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
          btn_status: false,
          card_status: false,
          action: 'Acessar serviço',
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
          btn_status: false,
          card_status: false,
          action: 'Acessar serviço',
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
      ],
      saas_ferramentas_cientificas: [
        {
          titulo: "MATLAB",
          subtitulo: "Cras justo odio, dapibus ac facilisis in, egestas eget ...",
          action: 'Acessar serviço',
          items: [
            {
              text: "serviço online",
              icon: "mdi-checkbox-marked-circle",
              subtext: "",
              style: { color: "green" }
            },
            {
              text: "assinatura ativa",
              icon: "mdi-checkbox-marked-circle",
              subtext: "Gerenciar assinatura",
              style: { color: "green" }
            },
            {
              text: "solicitações abertas",
              icon: "1",
              subtext: "solicitações de acesso",
              style: { color: "green" }
            }
          ]
        }
      ],
      saas_redes_colaborativas: [
        {
          titulo: "ORCID",
          subtitulo: "Praesent commodo cursus magna, vel scelerisque",
          action: 'Acessar serviço',
          items: [
            {
              text: "serviço online",
              icon: "mdi-checkbox-marked-circle",
              subtext: "",
              style: { color: "green" }
            },
            {
              text: "gratuito para CAPES",
              icon: "mdi-checkbox-marked-circle",
              subtext: "Gerenciar assinatura",
              style: { color: "green" }
            },
            {
              text: "acesos ilimitados",
              icon: "mdi-checkbox-marked-circle",
              subtext: "solicitações de acesso",
              style: { color: "green" }
            }
          ]
        }
      ],
      iaas_infraestrutura_gerenciada: [
        {
          titulo: "Calculadora de nuvem",
          subtitulo: "Compare preços de serviços gerenciados IaaS.",
          action: 'Iniciar Calculadora',
          btn_status: false,
          status_card: true,
          items: [
            {
              text: "pilhas criadas",
              icon: "4",
              subtext: "Visão geral - Gerenciar",
              style: { color: "green" },
            }
          ]
        },
        {
          titulo: "Amazon AWS",
          subtitulo: "Maecenas sed diam eget risus varius blandit sit...",
          action: 'Adicionar ao carrinho',
          btn_status: true,
          status_card: false,
          items: [
            {
              text: "pilhas criadas",
              icon: "4",
              subtext: "Visão geral - Gerenciar",
              style: { color: "green" },
            }
          ]
        },
        {
          titulo: "Amazon AWS",
          subtitulo: "Maecenas sed diam eget risus varius blandit sit...",
          action: 'Adicionar ao carrinho',
          btn_status: true,
          status_card: false,
          items: [
            {
              text: "pilhas criadas",
              icon: "4",
              subtext: "Visão geral - Gerenciar",
              style: { color: "green" },
            }
          ]
        },
        {
          titulo: "Microsoft Azure",
          subtitulo: "Maecenas sed diam eget risus varius blandit sit...",
          action: 'Adicionar ao carrinho',
          btn_status: true,
          status_card: false,
          items: [
            {
              text: "pilha criada",
              icon: "1",
              subtext: "Visão geral - Gerenciar",
              style: { color: "green" },
            }
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
