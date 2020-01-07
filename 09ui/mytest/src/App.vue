<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <!-- 头部搜索框 -->
    <app-search></app-search>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white" style="height: 200px;background:#ccc;">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 九宫格 -->
    <van-grid>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
    <van-divider />
    <van-grid :gutter="10">
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    <!-- 底部导航 -->
    <app-foot></app-foot>
  </div>
</template>

<script>
import appFoot from "./components/appfoot.vue";
import appSearch from "./components/appsearch.vue";

export default {
  data() {
    return {};
  },
  name: "app",
  components: {
    // HelloWorld
    appFoot,
    appSearch
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
