<template>
  <div>
    <h1>详情</h1>
    <img :src="data.goods_image" alt />
    <p>{{data.goods_info.goods_name}}</p>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      data: ""
    };
  },
  async created() {
    //$route
    let id = this.$route.query.id;
    window.console.log(this.id);
    let {
      data: { datas }
    } = await this.$axios.get("https://www.nanshig.com/mobile/index.php", {
      params: {
        act: "goods",
        op: "goods_detail",
        goods_id: id,
        key: ""
      }
    });
    this.data = datas;
    window.console.log(datas);
  }
};
</script>