<template>
  <div>
    <h1>主页</h1>
    <router-link :to="{name:'list',params:{a:10,b:20}}">跳列表页</router-link>
  </div>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    window.console.log("Home.beforeRouteLeave");
    next();
  }
};
</script>