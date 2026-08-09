import { createRouter, createWebHistory } from 'vue-router'
import TimelinePage from '../pages/TimelinePage.vue'
import SJDSPage from '../pages/SJDSPage.vue'
import LakeNicaraguaPage from '../pages/LakeNicaraguaPage.vue'
import LeonPage from '../pages/LeonPage.vue'

const routes = [
  {
    path: '/',
    name: 'timeline',
    component: TimelinePage,
  },
  {
    path: '/san-juan-del-sur',
    name: 'sjds',
    component: SJDSPage,
  },
  {
    path: '/lake-nicaragua',
    name: 'lake-nicaragua',
    component: LakeNicaraguaPage,
  },
  {
    path: '/leon',
    name: 'leon',
    component: LeonPage,
  },
]

const router = createRouter({
  history: createWebHistory('/nicaragua-trip-2026/'),
  routes,
})

export default router
