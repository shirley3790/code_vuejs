<template>
  <div id="app">
    <!-- 6.在组件中使用 -->
    <ul>
      <li v-for="(item, index) in tags" :key="item.name" @click="change(index)">
        <router-link :to="item.path">{{ item.text }}</router-link>
      </li>
    </ul>
    <!-- 显示组件所在位置 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      currentpage: "/reg",
      tags: [
        {
          name: "home",
          path: "/home",
          text: "首页",
          component: "Home"
        },
        {
          name: "reg",
          path: "/reg",
          text: "注册",
          component: "Reg"
        },
        {
          name: "login",
          path: "/login",
          text: "登陆页",
          component: "Login"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车",
          component: "Cart"
        }
      ]
    };
  },
  methods: {
    change(index) {
      this.currentpage = this.tags[index].path;
    }
  },
  components: {}
};
</script>


