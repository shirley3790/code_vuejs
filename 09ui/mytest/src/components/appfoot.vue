<template>
  <van-tabbar v-model="active" active-color="#58bc58" inactive-color="#000">
    <van-tabbar-item
      v-for="(item) in menus"
      :key="item.name"
      :name="item.name"
      :icon="item.icon"
      :info="item.info"
      @click="change(item.name,item.path)"
    >{{item.title}}</van-tabbar-item>
    <!-- <van-tabbar-item name="search" icon="apps-o">列表</van-tabbar-item>
    <van-tabbar-item name="friends" icon="shopping-cart-o" info="0">购物车</van-tabbar-item>
    <van-tabbar-item name="setting" icon="friends-o">个人中心</van-tabbar-item>-->
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: "",
      menus: [
        {
          name: "home",
          icon: "home-o",
          title: "首页",
          info: null,
          path: "/home"
        },
        {
          name: "list",
          icon: "apps-o",
          title: "列表",
          info: null,
          path: "/list"
        },
        {
          name: "cart",
          icon: "shopping-cart-o",
          title: "购物车",
          info: 0,
          path: "/cart"
        },
        {
          name: "mine",
          icon: "friends-o",
          title: "个人中心",
          info: null,
          path: "/mine"
        }
      ]
    };
  },
  methods: {
    change(name, path) {
      this.active = name;
      this.$router.push({ path }); //实现路由跳转
    }
  },
  mounted() {
    window.console.log(this.$route);
    this.$router.push(this.$route.path);
    let str = this.$route.path.slice(1);
    window.console.log(str);
    this.active = str;
  }
};
</script>
<style scoped>
</style>