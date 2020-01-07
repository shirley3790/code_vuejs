import Vue from 'vue';
//1.引入vue-router
import VueRouter from 'vue-router';

//5.引入需要的子组件，以后可以通过哈希值的改变切换不同的组件
import Home from '../pages/home.vue';
import Login from '../pages/login.vue';
import Reg from '../pages/reg.vue';
import Cart from '../pages/cart.vue';
import List from '../pages/list.vue';
import About from '../pages/about.vue';
import Mine from '../pages/mine.vue';
import Notfound from '../pages/Notfound.vue';
import Goods from '../pages/goods.vue';

//2.使用vue-router（script标签引入方式自动完成）
Vue.use(VueRouter);

//3.实例化router并配置参数
let router = new VueRouter({
    routes: [
        //首页的路由
        {
            name: 'home',
            path: '/home', //当浏览器地址为/home时，显示Home组件的内容
            component: Home
        },
        {

            path: '/', //当浏览器地址为/home时，显示Home组件的内容
            redirect: '/home' //重定向
        },
        // 购物车
        {
            name: 'cart',
            path: '/cart',
            component: Cart,
            meta: { //设置该元信息就是为了鉴权
                requiresAuth: true
            }
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
            path: '/404',
            component: Notfound
        },
        {
            name: 'is404',
            path: '*',
            redirect: '/404' //重定向
        }, {
            name: 'list',
            path: '/list',
            component: List
        }, {
            name: 'mine',
            path: '/mine',
            component: Mine,
            meta: { //设置该元信息就是为了鉴权
                requiresAuth: true
            }
        }, {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'goods',
            path: '/goods',
            component: Goods
        }
    ]
});


export default router;