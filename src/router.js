import Vue from 'vue'
import Router from 'vue-router'
import Shop from './views/Shop/Shop'
import ShopGoods from './views/Shop/ShopGoods/ShopGoods'
import ShopInfo from './views/Shop/ShopInfo/ShopInfo'
import ShopRatings from './views/Shop/ShopRatings/ShopRatings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      name: 'MSite',
      component: () => import('./views/MSite/MSite'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('./views/Order/Order'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('./views/Profile/Profile'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      name: 'Search',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Search/Search'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Login/Login')
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          name: 'ShopGoods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          name: 'ShopRatings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          name: 'ShopInfo',
          component: ShopInfo
        },
        {
          path: '',
          name: 'ShopGoods',
          redirect: '/shop/goods'
        }
      ]
    }
  ]
})
