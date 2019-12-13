<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          router
        >
          <el-menu-item :index="item.path" v-for="item in tags" :key="item.name">
            {{ item.text }}
            <!-- <router-link :to="item.path" active-class="current">{{ item.text }}</router-link> -->
            <!-- <router-link to="{name:'reg'}" active-class="current">{{ item.text }}</router-link>
            <router-link to="{path:'/reg'}" active-class="current">{{ item.text }}</router-link>-->
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <!-- 显示组件所在位置 -->
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      activeIndex: "/home",
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
    handleSelect(index, indexpath) {
      window.console.log(index, indexpath);
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

