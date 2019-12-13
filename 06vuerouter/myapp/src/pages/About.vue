<template>
  <div>
    <h1>详情</h1>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      id: ""
    };
  },
  async created() {
    //$route
    let id = this.$route.query.id;
    window.console.log(this.id);
    let data = await this.$axios.get(
      `https://www.nanshig.com/mobile/index.php?act=goods&op=goods_detail&goods_id=${id}&key=`
    );
    window.console.log(data);
  }
};
</script>