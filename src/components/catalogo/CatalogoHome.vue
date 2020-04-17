<template>
  <v-container style="width: 100%; " class="grey lighten-4 pa-0" fluid>
    <v-row
      :style="back"
      class="pa-0"
      style="height:314px"
    >
      <v-col cols="12"  class="pa-0" >
          <v-container class="cont pa-0">
            <v-row
              style="height:185px"
            >
              <v-col
                style="padding-top:34px"
                class="pb-0 d-flex" cols="12">
                  <img
                      class="mx-auto"
                      :src="logo"
                  >
              </v-col>
              <v-col class="d-flex pt-0" >
                  <h1 class="title white--text mx-auto">Serviços em nuvem para ensino, pesquisa e inovação.</h1>
              </v-col>
            </v-row>
          </v-container>

          <v-row
            style="height:128px"
            class="btn-back"
          >
            <v-container class="cont pa-0">
              <v-col cols="12" class="pa-0 d-flex  " >
                <v-btn-toggle
                  v-model="filterTab"
                  tile
                  color="transparent"
                  group
                  class="mx-auto d-none d-sm-flex"
                  active-class="btn-active"
                >
                  <v-btn
                    text
                    value="all"
                  >
                    Todos os Serviços
                  </v-btn>
                  <v-btn
                    value="gerais"
                    text
                  >
                    Utilidades Gerais
                  </v-btn>
                  <v-btn
                    value="tools"
                    text
                  >
                    Ferramentas Científicas
                  </v-btn>
                  <v-btn
                    value="redes"
                    text>
                    Redes Colaborativas
                  </v-btn>
                  <v-btn
                    value="infra"
                    text>
                    Infraestrutura de TI
                  </v-btn>
                </v-btn-toggle>
              </v-col>
              <v-col cols="12" class="pa-0 search-box" >
                <v-text-field
                  solo
                  full-width
                  single-line
                  placeholder="Pesquisar Todos os Serviços NasNuvens"
                  prepend-inner-icon="mdi-magnify"
                  @input="search"
                  v-model="searchCatalog"
                  height="40px"
                />
              </v-col>
            </v-container>
          </v-row>
      </v-col>
    </v-row>

    <v-row class="grey lighten-4">
      <v-col class="cont">
        <SaasUtilidadesGerais
          v-if="filterTab==='all' || filterTab==='gerais'"
          :items="utilidadeGeraisFiltered"
        />
      </v-col>
    </v-row>

    <v-row class="grey lighten-2">
      <v-col class="cont">
        <SaasFerramentasCientificas
          v-if="filterTab==='all' || filterTab==='tools'"
          :items="ferramentasCientificasFiltered"
        />
      </v-col>
    </v-row>

    <v-row class="grey lighten-4">
      <v-col class="cont">
        <SaasRedesColaborativas
          v-if="filterTab==='all' || filterTab==='redes'"
          :items="catalogFiltered"
        />
      </v-col>
    </v-row>

    <v-row class="grey lighten-4 "
           align="center"
           style="margin-bottom:80px;"
      >
      <v-col class="cont">
        <v-card
          class=" card-highlight"
          tag="a"
        >
          <div class="white--text align-end ma-0 pa-0" >
            <v-img
              class="pa-0 white--text align-end"
              height="185px"
              contain
              :style="back"
              style="border-radius: 4px 4px 0 0;"
            ></v-img>
          </div>
          <v-divider class="ma-0"></v-divider>
          <v-row>
            <v-col cols="9">
              <v-card-title
                class="px-0 py-0 light-blue--text accent-4"
                style="
                line-height:1.3rem;
                margin-right:20px;
                margin-left:20px;
                word-break:normal;
                "
              >
                 titulo
              </v-card-title>
              <v-card-subtitle
                class="text-card pa-0">
                teste
              </v-card-subtitle>
            </v-col>
            <v-col cols="3" class="pr-2">
              <v-btn
                color="#009dd9"
                width="176"
                dark
                class="white-btn mx-auto"
              >
                Solicitar
              </v-btn>
            </v-col>
          </v-row>

        </v-card>
      </v-col>
    </v-row>

    <v-row class="blue darken-2">
      <v-col class="cont">
        <IaasInfraestruturaGerenciada
          v-if="filterTab ==='all' || filterTab==='infra'"
          :items="infraestruturaGerenciadaFiltered"
        />
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import SaasUtilidadesGerais from "../../components/catalogo/SaasUtilidadesGerais.vue";
import SaasFerramentasCientificas from "../../components/catalogo/SaasFerramentasCientificas.vue";
import SaasRedesColaborativas from "../../components/catalogo/SaasRedesColaborativas.vue";
import IaasInfraestruturaGerenciada from "../../components/catalogo/IaasInfraestruturaGerenciada.vue";

export default {
  name: "CatalogoHome",
  data(){
        return {
          searchCatalog: '',
          catalog: [],
          catalogFiltered: [],
          utilidadeGeraisDefault: [],
          redesColaborativasDefault: [],
          ferramentasCientificasDefault:[],
          infraestruturaGerenciadaDefault:[],
          catalogAll: true,
          filterTab: 'all',
            /*back:{
                backgroundImage: 'url(' + require(`${process.env.VUE_APP_IMAGE_PATH}background_catalog.jpg`) + ')',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'scroll',
                backgroundSize: 'cover',
            },*/
            back:{
                backgroundImage: `url(${process.env.VUE_APP_IMAGE_PATH}/img/background_catalog.jpg)`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'scroll',
                backgroundSize: 'cover',
            },
            //logo: require(`${process.env.VUE_APP_IMAGE_PATH}logo_white_nasnuvens.png`),
            logo: `${process.env.VUE_APP_IMAGE_PATH}/img/logo_white_nasnuvens.png`,
        }
  },
  computed: {
    utilidadeGeraisFiltered(){
      return this.filter(this.searchCatalog, this.utilidadeGeraisDefault)
    },
    redesColaborativasFiltered() {
      return this.filter(this.searchCatalog, this.redesColaborativasDefault)
    },
    ferramentasCientificasFiltered() {
      return this.filter(this.searchCatalog, this.ferramentasCientificasDefault)
    },
    infraestruturaGerenciadaFiltered() {
      return this.filter(this.searchCatalog, this.infraestruturaGerenciadaDefault)
    }
  },
  components: {
    SaasUtilidadesGerais: SaasUtilidadesGerais,
    SaasFerramentasCientificas: SaasFerramentasCientificas,
    SaasRedesColaborativas: SaasRedesColaborativas,
    IaasInfraestruturaGerenciada: IaasInfraestruturaGerenciada
  },
  mounted() {
      this.axios.get('https://pocresellergw.nasnuvens.rnp.br/cms/en/t2')
      .then( r => {
        this.catalog = r.data.nodes
        this.catalogFiltered = r.data.nodes
      }
      )

    this.utilidadeGerais()
    this.redesColaborativas()
    this.ferramentasCientificas()
    this.infraestruturaGerenciada()
  },
  methods:{
    search(val) {
      const vm = this
      this.catalogFiltered = []
      if (val) {
        this.catalog.forEach(function (item) {

            if(JSON.stringify(item)
              .toLowerCase()
              .includes(val.toLowerCase()) ) {

              vm.catalogFiltered.push(item)
            }
        })
      } else {
        vm.catalogFiltered = vm.catalog
      }
    },
    filter(val, catalog) {
      let catalogFiltered = []

      if (val) {
        catalog.forEach(function (item) {

            if(JSON.stringify(item)
              .toLowerCase()
              .includes(val.toLowerCase()) ) {

              catalogFiltered.push(item)
            }
        })
        return catalogFiltered
      } else {
        return catalog
      }
    },
    utilidadeGerais() {
      this.axios.get(`${process.env.VUE_APP_DOMAIN}${process.env.VUE_APP_UTILIDADES_GERAIS}`)
        .then( r => {
          this.utilidadeGeraisDefault = r.data.nodes
        }
        )
    },
    redesColaborativas() {
      this.axios.get(`${process.env.VUE_APP_DOMAIN}${process.env.VUE_APP_REDES_COLABORATIVAS}`)
        .then( r => {
          this.redesColaborativasDefault = r.data.nodes
        }
        )
    },
    ferramentasCientificas() {
      this.axios.get(`${process.env.VUE_APP_DOMAIN}${process.env.VUE_APP_FERRAMENTAS_CIENTIFICAS}`)
        .then( r => {
          this.ferramentasCientificasDefault = r.data.nodes
        }
        )
    },
    infraestruturaGerenciada() {
      this.axios.get(`${process.env.VUE_APP_DOMAIN}${process.env.VUE_APP_INFRAESTRUTURA_GERENCIADA}`)
        .then( r => {
          this.infraestruturaGerenciadaDefault = r.data.nodes
        }
        )
    }
  }
};
</script>
<style>

.theme--light.v-input .v-text-field__slot input::placeholder {
  color: #BCBCBC;
  font-size:18px;
  font-family: 'Roboto';
}

.theme--light.v-input .v-text-field__slot input {
  color: black;
  font-size:18px;
  font-family: 'Roboto';
}

i.v-icon{
  color: black !important;
  font-size: 32px !important;
}

.v-text-field__slot{
  height:45px;
}

.v-input__slot{
  height: 45px !important;
  min-height: 10px !important;
}

#catalogo .v-card__title{
  font-size: 20px;
}

#catalogo .v-card__subtitle {
  font-size: 14px;
  max-height: 66px;
  overflow: hidden;
}

#catalogo .white-btn > .v-btn__content{
	font-family: 'Roboto Bold', 'Roboto';
	font-weight: 700;
	font-style: normal;
	font-size: 16px;
	color: #FFFFFF;
}

#catalogo .v-btn__content{
  font-family: "Roboto";
	text-align: center;
  text-transform: initial;
  letter-spacing: 0px;
  line-height: normal;
  color: #00ccff;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  text-align: center;
}

#catalogo .btn-active > span.v-btn__content {
  color: white;
  font-family: "Roboto", "Roboto";
  font-weight: bold;
}
</style>
<style scoped>

#catalogo v-input input::placeholder {
  color: #c0c0c2;
}


#catalogo .btn-back{
  background-color:rgba(0, 0, 0, 0.63921568627451);
}
#catalogo .search-box {
  max-height: 88px;
}

#catalogo h1.title {
  padding-bottom: 30px;
  margin-top: 0px !important;
  font-family: 'Roboto Light', 'Roboto' !important;
  font-weight: 350;
  font-style: normal;
  font-size: 24px !important;
  color: #FFFFFF !important;
  text-align: center;
}

#catalogo .cont {
  max-width: 1000px !important;
  margin: 0 auto;
  padding: 0px;
}

#catalogo .btn-active {
  color: transparent !important;
}

.col-12 {
	-webkit-box-flex: 0 !important;
	-ms-flex: 0 0 100% !important;
	flex: 0 0 100% !important;
	max-width: 100% !important;
}

#catalogo .text-card {
  /*display: block;*/
  height:94px;
/*  text-overflow: ellipsis ellipsis;*/
  margin-top: 0px;
  margin-left: 20px;
  margin-right: 20px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>

