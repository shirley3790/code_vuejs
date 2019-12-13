<template>
  <div id="app">
    <!-- 6.在组件中使用 -->
    <ul>
      <li v-for="item in tags" :key="item.name">
        <!-- <router-link to="/reg">{{ item.text }}</router-link> -->
        <router-link :to="item.path" active-class="current">{{ item.text }}</router-link>
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
<style  lang="scss">
.current {
  color: red;
  font-weight: bold;
  a {
    font-size: 12px;
    &:hover {
      color: blue;
    }
  }
}
</style>

