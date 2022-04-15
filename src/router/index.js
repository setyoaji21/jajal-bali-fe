import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/wisata',
    component: () => import('../layouts/default.vue'),
    children: [
      {
        path: '/wisata',
        component: () => import('../views/Wisata/index.vue'),
        name: 'wisata'
      },
      {
        path: '/wisata/add',
        name: 'wisata-add',
        component: () => import('../views/Wisata/add.vue')
      },
      {
        path: '/wisata/:wisataId',
        name: 'wisata-detail',
        component: () => import('../views/Wisata/detail.vue')
      },
      {
        path: '/wisata/:wisataId/edit',
        name: 'wisata-edit',
        component: () => import('../views/Wisata/edit.vue')
      },
      {
        path: '/about-us',
        component: () => import('../views/AboutUs.vue'),
        name: 'about-us',
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    // meta: { dontOpenAfterLogin: true },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router