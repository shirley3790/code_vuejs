import axios from 'axios';
const common = {
    state: {
        user: null
    },
    getters: {
        // currentStatue(state) {
        //     if (state.user) {
        //         //登陆的
        //         return true;
        //     } else {
        //         //false
        //         return false;
        //     }

        // }
    },
    mutations: {
        login(state, { username, Authorization }) {
            //登陆
            state.user = {
                username,
                Authorization
            }

            //登陆成功把登陆的状态存到本地存储里面
            let str = JSON.stringify(state.user);
            // localStorage.setItem(username + '-authorization', str);
            localStorage.setItem('authorization', str);
        },
        logout(state) {
            //退出
            state.user = null;
            // window.console.log(state);
            // window.console.log(state.user.username + '-authorization');
            localStorage.removeItem('authorization');

        }
    },
    actions: {
        async checkLogin(context) {
            let user = localStorage.getItem("authorization");
            if (!user) {//如果读取不到用户信息，直接退出
                context.commit('logout');
            } else {
                //如果读取到用户，继续判断token的正确性和失效性==token校验
                user = JSON.parse(user);
                // 发起ajax请求，校验token是否过期
                let { data } = await axios.get('http://localhost:1911/verify', {
                    // params:{
                    //     Authorization: user.Authorization
                    // },
                    // Authorization: user.Authorization
                    headers: {
                        Authorization: user.Authorization
                    }
                })
                // 防止刷新vuex数据丢失的问题
                if (data.code === 1) {
                    context.commit('login', user);
                } else {
                    context.commit('logout');
                    return 400
                }
            }
            return 200;
        }
    }
}

export default common;