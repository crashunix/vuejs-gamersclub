import { createRouter, createWebHistory } from 'vue-router'
import News from '../views/News.vue'
import Matches from '../views/Matches.vue'
import Ranking from '../views/Ranking.vue'

const routes = [
  {
    path: '/',
    name: 'News',
    component: News
  },
  {
    path: '/matches',
    name: 'Matches',
    component: Matches
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: Ranking
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'is-active'
})

export default router
