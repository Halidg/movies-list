import { createRouter, createWebHistory  } from 'vue-router'
import Main from '../pages/Main.vue'
import Detail from '../pages/Detail.vue'
import Actor from '../pages/Actor.vue'

const routes = [
  {
    path: '/', name: 'Home', component: Main  
  },
  {
    path: '/movie/:id', name: 'Movie', component: Detail, 
  },
  {
    path: '/actor/:id', name: 'Actor', component: Actor, 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router