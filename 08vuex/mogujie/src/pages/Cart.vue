<template>
  <div>
    <h1>购物车</h1>
    <div class="page-cart">
      <el-steps :active="1" finish-status="success">
        <el-step title="购物车"></el-step>
        <el-step title="结算"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <el-row :gutter="30" v-for="item in cartList" :key="item.id" style="margin-top:30px">
        <el-col :span="4">
          <img :src="item.imgurl" />
        </el-col>
        <el-col :span="16">
          <h4>{{item.name}}</h4>
          <p class="price">
            <span>{{item.price}}</span> &times;
            <!-- 计数器 -->
            <el-input-number size="mini" v-model="item.qty" @change="changeQty(item.id,$event)"></el-input-number>
          </p>
        </el-col>
        <el-col :span="4" style="text-align:right">
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            size="mini"
            @click="removeGood(item.id)"
          ></el-button>
        </el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :span="12">
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="clearCart()">清空购物车</el-button>
        </el-col>
        <el-col :span="12" class="price" style="text-align:right">
          总计：
          <span>{{ totalPrice.toFixed(2) }}</span>
        </el-col>
      </el-row>
      <div style="text-align:right">
        <el-button type="success" icon="el-icon-s-finance" @click="getkucun(666)">去结算</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    totalPrice() {
      //get方法  M-V
      // return this.datalist.reduce((prev, item) => {
      //   return prev + item.price * item.qty;
      // }, 0);

      // let sum = 0;
      // this.datalist.forEach(item => {
      //   sum += item.price * item.qty;
      // });
      // return sum;

      //获取总价格：通过store里面的getters计算属性，获取我们的总结
      return this.$store.getters.allprice;
    },
    cartList() {
      return this.$store.state.cart.cartList;
    }
  },
  methods: {
    changeQty(id, qty) {
      window.console.log(id, qty);
      //马上就修改修改数量
      // this.$store.commit("changeqty", { id, qty });
      this.$store.dispatch("getkuncun", { id, qty });
    },
    removeGood(id) {
      let isok = confirm("你确定要删除吗？");
      if (isok) {
        this.$store.commit("removeItem", id);
      }
    },
    clearCart() {
      let isok = confirm("你确定要清空购物车吗？");
      if (isok) {
        this.$store.commit("clearCart");
      }
    },
    getkucun(id) {
      //调用store里面的ajax方法
      this.$store.dispatch("getkuncun", id);
    }
  },
  created() {
    //钩子函数
    // let data = this.$store.state.products; //获取store里面的数据
    let data = this.$store.state.cart.cartList; //获取store里面的数据，测试数据
    window.console.log(data);
  }
};
</script>
<style lang="scss">
.page-cart img {
  width: 100%;
}
</style>