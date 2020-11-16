import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from 'vuetify'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/black-green-light.css'
// import Directives from '../plugin/directives'
import io from 'socket.io-client'


var socket = io('http://localhost:3000')

Vue.config.productionTip = false
Vue.prototype.$socket = socket

// Vue.use(window.VueTimepicker)

Vue.use(VueMaterial)
// Vue.use(Directives)
Vue.use(vuetify);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
