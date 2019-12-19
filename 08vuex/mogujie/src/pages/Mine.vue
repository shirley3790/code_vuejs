<template>
  <div>
    <h1>我的</h1>
    <form class action="/multer/singup" method="post" enctype="multipart/form-data">
      <!--enctype="multipart/form-data"表示不会对数据本身编码，multer只处理enctype="multipart/form-data"的表单数据-->
      <input type="file" name="singleFile" value />
      <input type="submit" name value="上传1" />
    </form>

    <form class action="/multer/arrup" method="post" enctype="multipart/form-data">
      <input type="file" name="arrayFile" value multiple />
      <!--multiple 可上传多张  -->
      <input type="submit" name value="上传2" />
    </form>

    <form class action="/multer/fieldup" method="post" enctype="multipart/form-data">
      <input type="file" name="fieldSingleFile" value />
      <input type="file" name="fieldArrayFile" value multiple />
      <input type="submit" name value="上传3" />
    </form>
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