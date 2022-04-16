import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/sb-admin-2.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import './assets/css/fontawesome-free/all.css'

// import './assets/js/sb-admin-2.js'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.moment = moment

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
