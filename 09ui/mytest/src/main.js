import Vue from 'vue'
import App from './App.vue'
//引入vant ui框架
import Vant from 'vant';
import '../node_modules/vant/lib/index.css';
import router from './router/index.js';

Vue.use(Vant); //使用该框架

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')