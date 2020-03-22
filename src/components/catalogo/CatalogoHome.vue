<template>
  <v-container style="width: 100%" class="grey lighten-4 pa-0" fluid>
    <v-row
        :style="back"
    >
      <v-col cols="12"  class="pa-0" >
          <v-container class="cont pa-0">
            <v-row>
              <v-col class="d-flex" cols="12">
                  <img
                      class="mx-auto"
                      :src="logo"
                  >
              </v-col>
              <v-col class="d-flex" >
                  <h1 class="title white--text mx-auto">Serviços em nuvem para ensino, pesquisa e inovação.</h1>
              </v-col>
            </v-row>
          </v-container>

          <v-row class="btn-back">
            <v-container class="cont pa-0">
              <v-col cols="12" class="d-flex " >
                <v-btn-toggle
                  v-model="filterTab"
                  tile
                  color="deep-purple accent-3"
                  group
                  class="mx-auto"
                  active-class="btn-active"
                >
                  <v-btn
                    text
                    value="all"
                    color="#00ccf8"
                  >
                    todos os serviços
                  </v-btn>
                  <v-btn
                    value="gerais"
                    text
                    color="#00ccf8"
                  >
                    utilidade gerais
                  </v-btn>
                  <v-btn
                    value="tools"
                    color="#00ccf8"
                    text
                  >
                    ferraments cientificas
                  </v-btn>
                  <v-btn
                    value="redes"
                    color="#00ccf8"
                    text>
                    redes colaborativas
                  </v-btn>
                  <v-btn
                    value="infra"
                    color="#00ccf8"
                    text>
                    infraestrutura TI
                  </v-btn>
                </v-btn-toggle>
              </v-col>
              <v-col cols="12" class="" >
                <v-text-field
                  solo
                  full-width
                  single-line
                  placeholder="Pesquisar todos os serviços nas nuvens"
                  prepend-inner-icon="mdi-magnify"
                  @input="search"
                  v-model="searchCatalog"
                />
              </v-col>
            </v-container>
          </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="cont">
        <SaasUtilidadesGerais
          v-if="filterTab==='all' || filterTab==='gerais'"
          :items="utilidadeGeraisFiltered"
        />
        <SaasFerramentasCientificas
          v-if="filterTab==='all' || filterTab==='tools'"
          :items="ferramentasCientificasFiltered"
        />
        <SaasRedesColaborativas
          v-if="filterTab==='all' || filterTab==='redes'"
          :items="catalogFiltered"
        />
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
          this.catalog = r.data.nodes
          this.catalogFiltered = r.data.nodes
        }
        )
    },
    ferramentasCientificas() {
      this.axios.get(`${process.env.VUE_APP_DOMAIN}${process.env.VUE_APP_FERRAMENTAS_CIENTIFICAS}`)
        .then( r => {
          this.catalog = r.data.nodes
          this.catalogFiltered = r.data.nodes
        }
        )
    },
    infraestruturaGerenciada() {
      this.axios.get(`${process.env.VUE_APP_DOMAIN}${process.env.VUE_APP_INFRAESTRUTURA_GERENCIADA}`)
        .then( r => {
          this.catalog = r.data.nodes
          this.catalogFiltered = r.data.nodes
        }
        )
    }
  }
};
</script>
<style>
#catalogo .v-card__title{
  font-size: 20px;
}
#catalogo .v-card__subtitle {
  font-size: 14px;
  max-height: 66px;
  overflow: hidden;
}
#catalogo .v-btn__content{
  font-size: 14px;
}
</style>
<style scoped>
#catalogo .btn-back{
  background-color: rgba(0, 0, 0, 0.43);
  color: #00ccf8;
}

#catalogo h1.title {
  padding-bottom: 30px;
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
}

#catalogo .btn-active {
  color: white !important;
}

</style>
