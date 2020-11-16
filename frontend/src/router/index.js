import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login'
// import Register from '../views/Register'
import Mirror from '../views/Mirror'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: Login
  // },
  
  // {
  //   path: '/Register',
  //   name: 'Register',
  //   component: Register
  // },

  {
    path: '/',
    name: 'Mirror',
    component: Mirror
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
