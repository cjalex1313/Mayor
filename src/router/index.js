import { createRouter, createWebHashHistory } from 'vue-router'
import va from '@vercel/analytics'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
    if (to.query) {
      if (to.query.id) {
        const element = document.getElementById(to.query.id)
        var headerOffset = 90
        var elementPosition = element.getBoundingClientRect().top
        var offsetPosition = elementPosition - headerOffset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'instant'
        })
      }
    }
    if (!to.query || !to.query.id) {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/despre',
      name: 'despre',
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  if (to?.query?.id) {
    va.track('ProgramNavigation', {
      id: to.query.id
    })
  }
})

export default router
