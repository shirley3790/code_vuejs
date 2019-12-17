import Vue from 'vue';
//1.安装vuex ： npm i vuex

//2.引入vuex
import Vuex from 'vuex';

import axios from 'axios';

import { Message } from 'element-ui';

//3.引用vuex
Vue.use(Vuex);

//4.创建实例 store
const store = new Vuex.Store({
    state: { //相当于实例里面的data属性
        cartList: [
            {
                id: "1",
                name: "huawei mate30 pro",
                imgurl:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576517817228&di=4a68d74f86fbbc86f8ccb149aa0547b5&imgtype=0&src=http%3A%2F%2Fimg3.myhsw.cn%2F2019-09-19%2Fk27xdk3f.jpg",
                price: 5998,
                qty: 6
            },
            {
                id: "2",
                name: "xiaomi9",
                imgurl:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571131475&di=2df2d3a54a89db9e09952799acb25261&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F8488db95efa140b9c50cb4615e2ca337a6981aa7.jpg",
                price: 2999,
                qty: 2
            },
            {
                id: "3",
                name: "onePlus9 pro",
                imgurl:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570536784660&di=d4471f6edf73cace7d98fb05869a9277&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn1%2Fs450x450_jfs%2Ft28117%2F273%2F1288839750%2F66834%2F8ef15c40%2F5cdd22b8Nbc711aba.jpg",
                price: 3999,
                qty: 1
            },
            {
                id: "4",
                name: "魅族",
                imgurl:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570536784660&di=d4471f6edf73cace7d98fb05869a9277&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn1%2Fs450x450_jfs%2Ft28117%2F273%2F1288839750%2F66834%2F8ef15c40%2F5cdd22b8Nbc711aba.jpg",
                price: 799,
                qty: 1
            }
        ]
    },
    getters: {//getters类似实例中的computed计算属性，getters是get方法。computed有get和set
        allprice(state) {
            return state.cartList.reduce((prev, item) => prev + item.price * item.qty, 0);
        }
    },
    mutations: {//类似实例中的methods方法，能操控state数据的唯一方式
        removeItem(state, id) {//删除购物车某条商品
            state.cartList = state.cartList.filter(item => item.id != id);
        },
        clearCart(state) {//清空购物车
            state.cartList = [];
        },
        addItem(state, data) {//添加商品
            state.cartList.unshift(data);
        },
        changeqty(state, { id, qty }) {
            //修改数量
            state.cartList.forEach(item => {
                if (item.id == id) {
                    item.qty = qty;
                }
            })
        },
        fail() {
            Message.error('已经超过库存量了哦');
        }
    },
    actions: {
        //发送ajax
        //context 类似store
        async getkuncun(context, { id, qty }) {
            let { data } = await axios.get('http://localhost:1911/goods/kucun', {
                params: {
                    id
                }
            });

            // window.console.log('库存量：' + data.data);
            // window.console.log('数量:' + qty);
            //如果获取到的库存量 > qty，可以加
            if (data.data > qty) {
                //可以继续加1
                context.commit('changeqty', { id, qty });
            } else {
                //超过库存量
                let qty = data.data;//最多能买那么多
                context.commit('changeqty', { id, qty });
                context.commit('fail');
            }
            window.console.log(data);
            window.console.log(context);
        }
        // async getCartlist(context) {
        //     //发送ajax
        //     context.state.cartList = data;
        // }
    }
});

export default store;