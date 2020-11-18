import { createRouter, createWebHistory } from 'vue-router'
import FeedLayout from '../layouts/FeedLayout.vue'
import PostLayout from '../layouts/PostLayout.vue'
import News from '../views/News.vue'
import Matches from '../views/Matches.vue'
import Ranking from '../views/Ranking.vue'
import Post from '../views/Post.vue'
import Category from '../views/Category.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    component: FeedLayout,
    children: [
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
  },
  {
    path: '/',
    component: PostLayout,
    children: [
      {
        path: ':id',
        name: 'Post',
        component: Post
      },
      {
        path: '/category/:id',
        name: 'Category',
        component: Category
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'is-active'
})

export default router
