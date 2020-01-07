<template>
  <div>
    <app-back></app-back>
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
    <!-- 详情信息 -->
    <div>
      <h3>SunMoon泰国金枕头冷冻榴莲果肉300g</h3>
      <p>￥49.9元</p>
      <p>
        数量：
        <van-button size="mini">-</van-button>
        <input type="text" v-model="num" />
        <van-button size="mini">+</van-button>
      </p>
    </div>
    <!-- 优惠券 -->

    <!-- 加入购物车 -->
    <van-goods-action>
      <van-goods-action-icon icon="home-o" text="首页" />
      <van-goods-action-icon info="5" icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>
<script>
import appBack from "../components/appback";
export default {
  data() {
    return {
      num: "1"
    };
  },
  components: {
    appBack
  },
  methods: {
    onClickIcon() {
      //   Toast("点击图标");
    },
    onClickButton() {
      //   Toast("点击按钮");
    }
  }
};
</script>
<style scoped>
</style>