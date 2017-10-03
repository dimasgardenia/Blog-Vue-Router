import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import listeditems from '@/components/listeditems'
import maincontent from '@/components/maincontent'
import posarticle from '@/components/posarticle'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',
      component: Home,
      children: [
        {path: '', component: listeditems},
        {path: '', component: maincontent},
        {path: '/post', component: posarticle}]
    }
  ]
})
