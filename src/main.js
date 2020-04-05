import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import 'popper.js'
import './assets/app.scss'



// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false



//import navbar
Vue.component('Navbar', require('./components/Navbar.vue').default)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')