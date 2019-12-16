<template>
  <div>
    <h1>列表页</h1>

    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="list">
      <div class="good" v-for="(good) in goodslist" :key="good.goods.title">
        <h1>{{good.goods.title}}</h1>
        <el-row :gutter="10">
          <!-- native作用：触发绑定在组件上的事件 -->
          <el-col
            @click.native="goto(item.goods_id)"
            v-for="(item) in good.goods.item"
            :key="item.goods_id"
            :span="6"
          >
            <div class="grid-content bg-purple">
              <p>
                <img :src="item.goods_image" class="image" />
              </p>
              <p>{{ item.goods_name }}</p>
              <p>
                <del>￥：{{ item.goods_price}}</del>
                <strong>￥:{{item.goods_promotion_price}}</strong>
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //定义时传参
  props: ["username", "password"],
  name: "List",
  data() {
    return {
      goodslist: "",
      currentDate: new Date()
    };
  },
  methods: {
    goto(id) {
      // window.console.log(id);
      // this.$router.push({ name: "about", query: { id } });
      this.$router.push({ path: "/about/" + id });
    }
  },
  async created() {
    //发送ajax请求数据，渲染
    let {
      data: { datas }
    } = await this.$axios.get("https://www.nanshig.com/mobile/index.php");
    // let {datas} = data;
    // window.console.log(datas);
    // data.then(d => {
    //   window.console.log(d);
    // });

    this.goodslist = datas.slice(1);
    // window.console.log(this.goodslist);
  }
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.el-col {
  height: 500px;
}
</style>