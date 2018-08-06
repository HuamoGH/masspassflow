import Vue from 'vue'
import Router from 'vue-router'
import RooterView from '@/views/RooterView'
import IntimeView from '@/views/intimeView/IntimeView'
import DashBoardView from '@/views/dashBoard/DashBoardView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/'
    },
    {
      path: '/home',
      name: 'RooterView',
      component: RooterView,
      children: [
        // {
        //   path:'',
        //   redirect:'/dashboard'
        // },
        {
          path: '/intimeview',
          name: 'IntimeView',
          component: IntimeView
        },
        {
          path: '/dashboardview',
          name: 'DashBoardView',
          component: DashBoardView
        },
        // {
        //   path: '/analysis',
        //   name: 'AnalysisView',
        //   component: AnalysisView
        // }
      ]
    },
  ]
})
