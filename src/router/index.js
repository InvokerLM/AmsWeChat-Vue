import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainFrame from '@/components/MainFrame'
import IndexPage from '@/components/IntroPages/IndexPage'
import MinePage from '@/components/IntroPages/MinePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainFrame',
      component: MainFrame,
      children: [{
        path: '/index',
        name: 'IndexPage',
        component: IndexPage
      },
      {
        path: '/mine',
        name: 'MainPage',
        component: MinePage
      }]
    }
  ]
})
