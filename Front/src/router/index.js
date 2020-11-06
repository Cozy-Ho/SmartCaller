import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Register from '../views/Register'
import Mirror from '../views/Mirror'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },

    {
      path: '/Mirror',
      name: 'Mirror',
      component: Mirror
    }

  ]
})
