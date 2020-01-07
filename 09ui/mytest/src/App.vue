<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <!-- <page-home></page-home> -->
    <!-- <page-list></page-list> -->
    <!-- <page-goods></page-goods> -->
    <!-- <page-about></page-about> -->
    <!-- <page-cart></page-cart> -->
    <!-- <page-mine></page-mine> -->
    <router-view />
    <!-- 底部导航 -->
    <app-foot></app-foot>
  </div>
</template>

<script>
import appFoot from "./components/appfoot.vue";
// import pageHome from "./pages/home";
// import pageList from "./pages/list";
// import pageGoods from "./pages/goods";
// import pageAbout from "./pages/about";
// import pageCart from "./pages/mine";
// import pageMine from "./pages/mine";

export default {
  data() {
    return {};
  },
  name: "app",
  components: {
    // HelloWorld
    appFoot
    // pageHome,
    // pageList
    // pageGoods
    // pageAbout
    // pageCart
    // pageMine
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
