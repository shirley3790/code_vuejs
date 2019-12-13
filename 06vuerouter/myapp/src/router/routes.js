let routes = [
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
        path: '/404',
        component: Notfound
    },
    {
        name: '404',
        path: '*',
        redirect: '/404' //重定向
    }
];

export default routes;