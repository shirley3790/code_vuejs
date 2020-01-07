<template>
  <van-nav-bar title="商品详情" left-text="返回" left-arrow @click.native="onClickLeft" />
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      window.console.log("触发了");
      this.$router.back();
    }
  }
};
</script>