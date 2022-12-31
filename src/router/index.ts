import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    component: () => import('@/views/Dashboard.vue')
  },
  {
    path: '/users',
    component: () => import('@/views/Users.vue')
  },
  {
    path: '/score',
    component: () => import('@/views/Score.vue')
  },
  {
    path: '/issues',
    component: () => import('@/views/Issues.vue')
  },
  {
    path: '/version',
    component: () => import('@/views/Version.vue')
  },
  {
    path: '/cache',
    component: () => import('@/views/Cache.vue')
  },
  {
    path: '/superadmin',
    component: () => import('@/views/SuperAdmin.vue')
  },
  {
    path: '/myinfo',
    component: () => import('@/views/MyInfo.vue')
  },
]
  

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
