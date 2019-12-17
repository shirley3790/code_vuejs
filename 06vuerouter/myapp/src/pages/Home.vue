<template>
  <div>
    <h1>主页</h1>
    <router-link :to="{name:'list',params:{a:10,b:20}}">跳列表页</router-link>
  </div>
</template>
<script>
export default {
  //2.在失活的组件里调用beforeRouteLeave离开守卫。
  beforeRouteLeave(to, from, next) {
    window.console.log("Home.beforeRouteLeave");
    next();
  }
};
</script>