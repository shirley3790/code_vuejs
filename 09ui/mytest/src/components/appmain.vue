<template>
  <div>
    <!-- 头部搜索框 -->
    <app-search></app-search>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white" style="height: 200px;background:#ccc;">
      <van-swipe-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
      </van-swipe-item>
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
    <van-grid :border="false" :column-num="3">
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import appSearch from "./appsearch";
//主页内容
export default {
  components: {
    appSearch
  }
};
</script>