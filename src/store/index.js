import Vue from 'vue'
import Vuex from 'vuex'

import intimeview from './modules/intimeview.js'
import dashboardview from './modules/dashboardview'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        intimeview,
        dashboardview
    }
})