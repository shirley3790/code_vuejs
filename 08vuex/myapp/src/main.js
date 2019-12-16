import Vue from 'vue'
import App from './App.vue'

// 引入elementUI框架  UI-视图  vue ui 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

import router from './router/index.js';

import axios from 'axios';
Vue.prototype.$axios = axios;


//导入store模块
import store from './store/index2.js/index.js';

new Vue({
  //4.把router实例注入到vue实例中
  router,
  //5.把vuex注入到实例
  store,
  render: h => h(App),
}).$mount('#app')