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
                <el-badge
                  :value="cartlength"
                  class="item"
                  v-if="item.name==='cart'"
                  style="line-height:30px"
                >{{item.text}}</el-badge>
                <template v-else>{{item.text}}</template>
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
      this.$router.push(path); //和<router-link to="path">
    }
  },
  computed: {
    cartlength() {
      // return this.$store.state.cartlist.length; //获取state下面数组的长度
      return this.$store.getters.cartlength; //获取getters下面的计算属性的值
    }
  },
  created() {
    this.activeIndex = this.$route.path;
    this.$store.dispatch("checkLogin");
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

