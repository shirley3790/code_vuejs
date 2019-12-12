import Vue from 'vue';
//1.引入vue-router
import VueRouter from 'vue-router';

//5.引入需要的子组件，以后可以通过哈希值的改变切换不同的组件
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';
import Cart from '../pages/Cart.vue';
import Notfound from '../pages/Notfound.vue';

//2.使用vue-router（script标签引入方式自动完成）
Vue.use(VueRouter);

//3.实例化router并配置参数
let router = new VueRouter({
    routes: [
        //首页的路由
        {
            name: 'home',
            path: '/home',  //当浏览器地址为/home时，显示Home组件的内容
            component: Home
        },
        {

            path: '/',  //当浏览器地址为/home时，显示Home组件的内容
            redirect: '/home' //重定向
        },
        // 购物车
        {
            name: 'cart',
            path: '/cart',
            component: Cart
        },
        {
            name: 'reg',
            path: '/reg',
            component: Reg
        }, {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: '404',
            path: '*',
            component: Notfound
        }
    ]
});

export default router;