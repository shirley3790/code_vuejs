<template>
  <van-tabbar v-model="active" active-color="#58bc58" inactive-color="#000">
    <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="search" icon="apps-o">列表</van-tabbar-item>
    <van-tabbar-item name="friends" icon="shopping-cart-o" info="5">购物车</van-tabbar-item>
    <van-tabbar-item name="setting" icon="friends-o">个人中心</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: "search"
    };
  }
};
</script>
<style scoped>
</style>