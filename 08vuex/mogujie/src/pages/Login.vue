<template>
  <div>
    <h1>登陆页</h1>
    <!-- <p>{{ name }} 欢迎登陆</p>
    <router-link :to="{name:'list',params:{a:10,b:20}}">跳列表页</router-link>-->
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked">7天免登陆</el-checkbox>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data: function() {
    return {
      checked: true,
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  created() {
    // window.console.log(this);
    // this.name = this.$route.params.username; //通过$route.params获取到params传过来的数据。缺点，刷新后数据就不存在了
    // this.name = this.$route.query.username; //通过$route.params获取到params传过来的数据。缺点，刷新后数据就不存在了
    // this.name = this.$route.params.id; //通过$route.params获取到params传过来的数据。缺点，刷新后数据就不存在了
    // window.console.log(this.$route);
  },
  methods: {
    open2() {
      this.$message({
        message: "登陆成功",
        type: "success"
      });
    },
    open4() {
      this.$message.error("登陆失败");
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // alert("注册成功!");
          //需求：发起请求，实现登陆功能
          let { username: name, password } = this.ruleForm;
          let { data } = await this.$axios.get(
            "http://localhost:1911/users/login",
            {
              params: {
                name,
                password,
                keep: this.checked
              }
            }
          );

          window.console.log(data);
          //如果登陆成功，就把token存到本地存储，待会路由拦截的时候需要用到token来鉴权(鉴别你是否有权限进入该组件)
          if (data.code) {
            //登陆成功
            this.open2();
            // localStorage.setItem("Authorization", data.authorization);
            this.$store.commit("login", {
              username: name,
              Authorization: data.authorization
            });

            //跳转到我的页面
            let { targeturl } = this.$route.params;
            // window.console.log(targeturl);

            this.$router.push({ path: targeturl || "/mine", query: { name } });
          } else {
            //登陆失败
            this.open4();
          }
        } else {
          // window.console.log("注册失败!!");
          this.open4();
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
    // go(name) {
    //   // this.$router.push({ name: name, params: { id: 666 } });
    //   // this.$router.push({ path: name });
    // }
  }
};
</script>