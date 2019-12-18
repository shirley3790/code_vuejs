<template>
  <div>
    <h1>我的</h1>
    <input type="file" ref="avatar" multiple />
    <input type="button" @click="upload" value="上传" />
  </div>
</template>
<script>
// import axios from 'axios';
export default {
  methods: {
    async upload() {
      let mydata = new FormData();
      mydata.set("avatar", this.$refs.avatar.files[0]);
      let { data } = await this.$axios.post(
        "http://localhost:1911/upload",
        mydata
      );
      window.console.log(data);
    }
  }
};
</script>