import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Notes from '../views/Note.vue'
import Activities from '../views/Activity.vue'
import Market from '../views/Market.vue'
import Task from '../views/Task.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities
  },
  {
    path: '/market',
    name: 'Market',
    component: Market
  },
  {
    path: '/tasks',
    name: 'Task',
    component: Task
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
