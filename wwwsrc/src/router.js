import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Login from './views/Login.vue'
// @ts-ignore
import Collections from './views/Collections.vue'
// @ts-ignore
import CollectionsArchive from './views/CollectionsArchive.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/collections',
      name: 'collections',
      component: Collections
    },
    {
      path: '/collections/:id',
      name: 'collectionsArchive',
      props: true,
      component: CollectionsArchive
    }
  ]
})
