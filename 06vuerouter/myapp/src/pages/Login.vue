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
// import Qs from "qs";
export default {
  data: function() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      checked: true, //复选框
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    open4() {
      this.$message.error("登陆失败");
    },
    open2() {
      this.$message({
        message: "恭喜你，登陆成功",
        type: "success"
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // alert("注册成功!");

          //需求：发起请求，实现注册功能
          let { username: name, password } = this.ruleForm;
          if (name && password) {
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
            if (data.code == 1) {
              //成功登陆
              this.open2();
            }
            window.console.log(data);
          }
        } else {
          window.console.log("登陆失败!!");
          this.open4();
          return false;
        }
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    window.console.log("Login.beforeRouteEnter");
    next();
  }
};
</script>