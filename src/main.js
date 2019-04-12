import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import router from '@/route'
// import firebase from 'firebase'
import GSignInButton from 'vue-google-signin-button'
import VueSession from 'vue-session'


// import { FormInput } from 'bootstrap-vue/es/components/form-input'

// import { FormInput } from 'bootstrap-vue/es/components/form-input'
// import 'bootstrap/scss/bootstrap.scss';
// import 'bootstrap-vue/src/index.scss';
// import 'custom.scss'



// import "~vue-material/dist/theme/all";

Vue.use(VueMaterial)
Vue.config.productionTip = false
Vue.use(GSignInButton)
Vue.use(VueSession)



// Vue.use(FormInput)

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  // el: '#app',
  render: h => h(App),
  // template: '<App/>',
  router
}).$mount('#app')
