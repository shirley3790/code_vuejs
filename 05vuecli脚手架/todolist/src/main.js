import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false



new Vue({
  render: h => h(App)
}).$mount('#app')


// new Vue({
//   el : '#app', //如果没有template和render，就直接把数据 : <div id="app">hello</div>作为模板，渲染到页面中
//   template : `<nav></nav>` //如果有template，优先级比el要高，直接用这里的模板来渲染
//   render : //如果有render。编译好了，虚拟节点，算法
// }).$mount('#app')
