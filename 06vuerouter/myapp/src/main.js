import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router/index.js';

new Vue({
  //4.把router实例注入到vue实例中
  router,
  render: h => h(App),
}).$mount('#app')
