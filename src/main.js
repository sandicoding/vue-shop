import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueFirestore from 'vue-firestore';


import 'popper.js'
import './assets/app.scss'
import { fb } from './firebase'


//vue firestrore
Vue.use(VueFirestore);
// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;

//import navbar
Vue.component('Navbar', require('./components/Navbar.vue').default)

Vue.config.productionTip = false

let app = ''

// eslint-disable-next-line no-unused-vars
fb.auth().onAuthStateChanged(function(user) {
    if (!app) {
        new Vue({
            router,
            render: h => h(App)
        }).$mount('#app')
    }
});