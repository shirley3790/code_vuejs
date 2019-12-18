import Vue from 'vue';
//1.安装vuex ： npm i vuex

//2.引入vuex
import Vuex from 'vuex';

import cart from './cart';
import common from './common';

//3.引用vuex
Vue.use(Vuex);

//4.创建实例 store
// 只用模块化store后会影响state数据的获取
// this.$store.state.xxx -> this.$store.state.cart.xxx
const store = new Vuex.Store({
    modules: {
        cart,//存放购物车的状态信息
        common //存公共的状态
    }
});

export default store;