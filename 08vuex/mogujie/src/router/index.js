import Vue from 'vue';
//1.引入vue-router
import VueRouter from 'vue-router';

//5.引入需要的子组件，以后可以通过哈希值的改变切换不同的组件
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';
import Cart from '../pages/Cart.vue';
import List from '../pages/List.vue';
import About from '../pages/About.vue';
import Mine from '../pages/Mine.vue';
import Notfound from '../pages/Notfound.vue';

//2.使用vue-router（script标签引入方式自动完成）
Vue.use(VueRouter);

//3.实例化router并配置参数
let router = new VueRouter({
    // mode: 'history',
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
            // beforeEnter(to, from, next) {
            //     window.console.log("Login.beforeEnter");
            //     next();
            // }
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
            component: List,
            props: {
                username: 'laoxie',
                password: 123456
            } //<List username="laoxie" password="123456" />
            // props : true //如果你写了布尔值，那默认就会接受的prams里面的数据 ：等效于<List v-bind="route.params"/> -> <List v-bind="{username:'laoxie',age:18}"/> -> <List username="laoxie" password=123/>
            // props: function () {
            //     return {
            //         username: 'laoxie',
            //         password: 123
            //     }
            // }
        }, {
            name: 'mine',
            path: '/mine',
            component: Mine,
            meta: { //设置该元信息就是为了鉴权
                requiresAuth: true
            }
        }, {
            name: 'about',
            path: '/about/:id',
            component: About
        }
    ]
});


// 全局路由守卫 beforeEach() 路由拦截
router.beforeEach(function (to, from, next) {
    //to:目标组件，准备进入的组件
    //form:失活组件，从这个地方离开
    //next() 进入下一个钩子,流程
    // window.console.log("index.beforeEach", to);

    //怎么鉴权
    if (to.meta.requiresAuth) {
        //需要鉴权
        let token = localStorage.getItem('authorization');

        if (token) { //登陆就可以进入下一步：这样写所有都需要鉴权才可进入下个组件
            next();
        } else {
            //没有token，token已经失效
            //如果你未登录，就让你跳到登陆页
            router.push({
                name: 'login',
                params: {
                    targeturl: to.path
                }
            });
        }
    } else {
        //不需要鉴权
        next();
    }

})

// router.beforeResolve(function (to, from, next) {
//     window.console.log("index.beforeResolve");
//     next();
// })

// router.afterEach(function () {//最后一步是没有next的
//     window.console.log("index.afterEach ");

// })

export default router;