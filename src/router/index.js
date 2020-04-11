import Vue from 'vue'
import VueRouter from 'vue-router'
import Macro from '@/views/macro'
Vue.use(VueRouter)

const routes = [
  {
    path: '/macro',
    name: 'chinaMacro',
    component: Macro,
    redirect: '/macro/home',
    meta: { title: '中国宏观', hidden: false },
    children: [
      {
        name: 'macroHome',
        path: 'home',
        meta: { title: '主页1', hidden: false },
        component: Macro, // 为下一级菜单提供router-view
        children: [
          {
            name: 'cpi1',
            path: 'cpi1',
            meta: { title: 'CPI1', hidden: false },
            component: Macro,
            children: [
              {
                name: 'cpi2',
                path: 'cpi2',
                meta: { title: 'CPI2', hidden: false },
                component: () => import(/* webpackChunkName: "cpi1" */ '@/views/macro/cpi')
              }
            ]
          }
        ]
      },
      {
        name: 'cpi',
        path: 'cpi',
        meta: { title: 'CPI', hidden: false },
        component: () => import(/* webpackChunkName: "cpi" */ '@/views/macro/cpi')
      },
      {
        name: 'pmi',
        path: 'pmi',
        meta: { title: 'PMI', hidden: false },
        component: () => import(/* webpackChunkName: "pmi" */ '@/views/macro/pmi')
      }
    ]
  },
  {
    name: 'gtja',
    path: '/gtja',
    meta: { title: '国泰君安', hidden: false },
    component: () => import(/* webpackChunkName: "gtja" */ '@/views/gtja')
  },
  {
    name: 'company',
    path: '/company',
    component: Macro,
    redirect: '/company/home',
    meta: { title: '公司财务', hidden: false },
    children: [
      {
        name: 'companyHome',
        path: 'home',
        meta: { title: '主页2', hidden: false },
        component: () => import(/* webpackChunkName: "companyHome" */ '@/views/company/home')
      }
    ]
  },
  // { path: '/404', component: () => import('@/views/404') },
  // {
  //   path: '*',
  //   redirect: '/404'
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
