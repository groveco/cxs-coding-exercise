import Vue from 'vue'

import './assets/css/index.scss';
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
