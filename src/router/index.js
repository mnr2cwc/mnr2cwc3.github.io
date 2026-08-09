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
  history: createWebHistory('/'),
  routes,
})

// Handle GitHub Pages 404.html redirect (GitHub Pages has no SPA fallback,
// so 404.html bounces unknown paths back here with the real path in ?p=)
router.beforeEach((to, from, next) => {
  const redirect = sessionStorage.redirect
  delete sessionStorage.redirect
  if (redirect) {
    next(redirect)
  } else {
    next()
  }
})

const params = new URLSearchParams(window.location.search)
const redirectPath = params.get('p')
if (redirectPath) {
  sessionStorage.redirect = decodeURIComponent(redirectPath).replace(/~and~/g, '&')
  window.history.replaceState(null, null, '/')
}

export default router
