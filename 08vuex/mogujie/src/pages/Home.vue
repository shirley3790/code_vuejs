<template>
  <div>
    <h1>主页</h1>
    <img src="../assets/zly.jpg" alt />
    <img :src="imgurl" alt />
    <img :src="imgurl2" alt />
    <img src="/bz.jpg" alt />
    <img src="/goods/bz.jpg" alt />
    <router-link :to="{name:'list',params:{a:10,b:20}}">跳列表页</router-link>
  </div>
</template>
<script>
//假设ajax获取到的是相对路径
let cartlist = "/zly.jpg";
export default {
  /*
    vue-cli 里面内置webpack,相对路径会被编译，所以要注意写法
      * require(url)
        * url是路径，直接写
        * 如果是变量，记得要拼接路径
      * 直接写绝对路径
        * http://sss.jpg
        * 把图片放在public目录下
        * nodejs服务器：静态资源-图片资源-绝对路径
  */
  data: function() {
    return {
      // cartlist: "/zly.jpg", 假设ajax获取到的是相对路径
      imgurl: require("../assets/zly.jpg"),
      imgurl2: require("../assets" + cartlist)
    };
  },
  //2.在失活的组件里调用beforeRouteLeave离开守卫。
  beforeRouteLeave(to, from, next) {
    // window.console.log("Home.beforeRouteLeave");
    next();
  }
};
</script>