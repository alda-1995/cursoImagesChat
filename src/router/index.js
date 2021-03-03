import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {auth} from '@/firebase';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/ingreso',
    name: 'Ingreso',
    meta: { requiresAuth: false },
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingreso.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/Chat.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const user  = auth.currentUser;
    if(user){
      next()
    }else{
      next({name:'Ingreso'})
    }
  } else {
    next()
  }
})