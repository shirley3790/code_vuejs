<template>
  <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
    <div slot="action" @click="onSearch">搜索</div>
  </van-search>
</template>
<script>
export default {
  data: function() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {
      window.console.log("搜索");
    }
  }
};
</script>
<style scoped>
</style>