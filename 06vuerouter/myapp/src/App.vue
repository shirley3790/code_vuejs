<template>
  <div id="app">
    <el-container>
      <el-header>
        <!-- 一行两列布局 -->
        <el-row>
          <el-col :span="16">
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
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="8">
            <el-button-group>
              <el-button type="primary" @click="goto('/reg')">注册</el-button>
              <el-button type="primary" @click="goto('/login')">登陆</el-button>
            </el-button-group>
          </el-col>
        </el-row>
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
          name: "list",
          path: "/list",
          text: "列表页",
          component: "List"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车",
          component: "Cart"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的",
          component: "Mine"
        }
      ]
    };
  },
  methods: {
    handleSelect(index, indexpath) {
      window.console.log(index, indexpath);
      // this.activeIndex = indexpath;
      this.activeIndex = index;
    },
    goto(path) {
      // window.console.log(this);
      /*
        内置属性：
          $router : Vuerouter 引入的第三方模块，注入vue实例里面
      */
      //编程式导航 :push(str)实现路由跳转=>切换组件
      this.$router.push(path); //和<router-link to="path">

      //push(object)
      // this.$router.push({path : path}); //和<router-link to="path">
      // this.$router.push({name : 'reg'}); //和<router-link to="path">

      //repalce()
    }
  },
  components: {},
  created() {
    this.activeIndex = this.$route.path;
  }
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

