<template>
  <div>
    <h1>登陆页</h1>
    <p>{{ name }} 欢迎登陆</p>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      name: ""
    };
  },
  created() {
    // window.console.log(this);
    // this.name = this.$route.params.username; //通过$route.params获取到params传过来的数据。缺点，刷新后数据就不存在了
    // this.name = this.$route.query.username; //通过$route.params获取到params传过来的数据。缺点，刷新后数据就不存在了
    this.name = this.$route.params.id; //通过$route.params获取到params传过来的数据。缺点，刷新后数据就不存在了
    // window.console.log(this.$route);
  }
};
</script>