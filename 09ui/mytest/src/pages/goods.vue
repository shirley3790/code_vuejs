<template>
  <div>
    <app-back></app-back>
    <div class="good">
      <van-card
        v-for="val in 7"
        :key="val"
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        :thumb="url"
      >
        <div slot="tags">
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </div>
        <div slot="footer">
          <!-- <van-icon name="add-o" color="#58bc58" size="28" /> -->
          <van-button size="mini">+</van-button>
        </div>
      </van-card>
    </div>
  </div>
</template>
<script>
import appBack from "../components/appback";
export default {
  data() {
    return {
      url: "https://img.yzcdn.cn/vant/t-thirt.jpg"
    };
  },
  components: {
    appBack
  }
};
</script>
<style scoped>
</style>