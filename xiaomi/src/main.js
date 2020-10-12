import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from '@/router/index.js';
import store from '@/store/index.js';
import './assets/css/xiaomi.css'

import $axios from 'axios';

Vue.prototype.axios=$axios
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
