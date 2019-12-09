Vue.component('app-header', {//组件名：横向拼接的写法，官方推荐写法
    template: `<div class="header">{{ keyword }}</div>`,
    data: function () {
        return {
            keyword: '蘑菇街的头部信息展示'
        }
    }
});