<template>
  <div>
    <app-back></app-back>
    <!-- 购物车信息 -->
    <div class="good" v-for="val in 3" :key="val">
      <p class="left">
        <van-checkbox v-model="checked" checked-color="#07c160"></van-checkbox>
      </p>
      <p class="right">
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="url">
          <div slot="tags">
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </div>
          <div slot="footer">
            <p>
              数量：
              <van-button size="mini">-</van-button>
              <input type="text" v-model="num" />
              <van-button size="mini">+</van-button>
            </p>
          </div>
        </van-card>
      </p>
    </div>
    <!-- 提交数据 -->
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script>
import appBack from "../components/appback";
export default {
  data() {
    return {
      url: "https://img.yzcdn.cn/vant/t-thirt.jpg",
      num: 1,
      checked: true
    };
  },
  components: {
    appBack
  },
  methods: {
    onSubmit() {}
  }
};
</script>
<style scoped>
.good {
  clear: both;
}
.left {
  float: left;
  width: 30px;
  text-align: center;
  height: 150px;
  line-height: 150px;
}
.right {
  float: right;
}
</style>