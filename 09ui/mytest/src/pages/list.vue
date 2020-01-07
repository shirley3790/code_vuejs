<template>
  <div>
    <!-- 头部搜索框 -->
    <app-search></app-search>
    <div class="left">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
      </van-sidebar>
    </div>
    <div class="right">
      <van-grid :gutter="10">
        <van-grid-item v-for="value in 8" :key="value">
          <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
          <p>车厘子</p>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script>
import appSearch from "../components/appsearch";
export default {
  data() {
    return {
      activeKey: 1
    };
  },
  components: {
    appSearch
  }
};
</script>
<style scoped>
.left {
  float: left;
  height: 500px;
  width: 85px;
  /* background: #ccc; */
}
.right {
  float: right;
  height: 500px;
  width: 315px;
  /* background: lightblue; */
}
</style>