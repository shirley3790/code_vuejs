<template>
  <div>
    <el-image style="width:400px" :src="goodsInfo.goods_image" fit="contain"></el-image>
    <h1>{{goodsInfo.goods_name}}</h1>
    <p class="price">
      <del>{{goodsInfo.goods_marketprice}}</del>
      <span>{{goodsInfo.goods_price}}</span>
    </p>

    <el-button-group>
      <el-button type="warning" icon="el-icon-shopping-cart-full" @click="addgood()">加入购物车</el-button>
      <el-button type="danger" icon="el-icon-goods">立即购买</el-button>
    </el-button-group>
    <h4>推荐商品</h4>
    <el-row :gutter="20">
      <el-col
        :span="6"
        v-for="item in goodsInfo.goods_commend_list"
        :key="item.goods_id"
        style="height:300px"
        @click.native="goto(item.goods_id)"
      >
        <el-image style="width:80%" :src="item.goods_image_url" fit="contain"></el-image>
        <h6>{{item.goods_name}}</h6>
        <p class="price">
          <del>{{item.goods_promotion_price}}</del>
          <span>{{(item.goods_promotion_price*0.8).toFixed()}}</span>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      goodsInfo: {}
    };
  },
  created() {
    //$route
    // let { id } = this.$route.query;
    let { id } = this.$route.params;
    // window.console.log(this.id);
    this.getdata(id); //进入页面的时候就根据id发起请求并渲染
  },
  methods: {
    goto(id) {
      //方案一：点击的时候直接就发送ajax请求新的数据渲染
      // this.getdata(id); //点击一次就请求一次新的数据替换上面的内容

      this.$router.push({ path: "/about/" + id });
    },
    async getdata(id) {
      //发送第二个请求：请求id对应的商品数据信息
      let {
        data: { datas }
      } = await this.$axios.get("https://www.nanshig.com/mobile/index.php", {
        params: {
          //get请求需要设置params，post请求不需要
          act: "goods",
          op: "goods_detail",
          goods_id: id,
          key: ""
        }
      });
      this.data = datas;
      this.goodsInfo = {
        goods_info: datas.goods_info, //商品详细数据
        goods_commend_list: datas.goods_commend_list, //猜你喜欢 [{},{}]
        goods_image: datas.goods_image //商品的大图
      };

      window.console.log(datas);
      window.console.log(this.goodsInfo);
    },
    addgood() {
      //判断商品是否存在

      let id = this.goodsInfo.goods_info.goods_id;
      let result = this.$store.state.cart.cartList.filter(
        item => item.id == id
      )[0]; //说明商品已存在
      if (result) {
        //商品已存在
        let qty = result.qty + 1;
        this.$store.commit("changeqty", { id, qty });
      } else {
        //商品不存在
        let data = {
          id,
          name: this.goodsInfo.goods_info.goods_name,
          imgurl: this.goodsInfo.goods_image,
          price: this.goodsInfo.goods_info.goods_promotion_price,
          qty: 1
        };
        //调用store里面的方法添加一个商品
        this.$store.commit("addItem", data);
      }
    }
  },
  //监听
  watch: {
    //方案二：利用监听器监听路由改变就发起新的请求:ajax节流：无谓的请求要避免
    // $route: function(newval, oldval) {
    //   // window.console.log(newval); //新值
    //   // window.console.log(oldval); //旧值
    //   if (newval.params.id != oldval.params.id) {
    //     //说明点击了一个新的商品
    //     this.getdata(newval.params.id);
    //   }
    // }
  },
  //组件内的路由守卫,路由拦截
  // beforeRouteEnter(to, from, next) {
  //   // window.console.log("beforeRouteEnter:", to, from);
  //   next();
  // },
  beforeRouteUpdate(to, from, next) {
    //方案三：利用路由守卫来发起新的请求
    window.console.log("beforeRouteUpdate:", to, from);
    this.getdata(to.params.id);
    next();
  }
  // beforeRouteLeave(to, from, next) {
  //   // window.console.log("beforeRouteLeave:", to, from);
  //   next();
  // }
};
</script>