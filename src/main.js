// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import VueAMap from 'vue-amap'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'normalize.css'

import Highcharts from 'highcharts/highstock'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsDrilldown from 'highcharts/modules/drilldown'
import Highcharts3D from 'highcharts/highcharts-3d'

HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts)
Highcharts3D(Highcharts)

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueAMap)

Vue.config.productionTip = false

VueAMap.initAMapApiLoader({
  key: '734acfcb211331d2e1cc41ff8e2fc74d',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.OverView', 'AMap.ToolBar', 
  'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor',  'AMap.Scale', 
  'AMap.Geolocation',],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
