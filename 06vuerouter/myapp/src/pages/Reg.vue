<template>
  <div>
    <h1>注册</h1>
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
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>

    <!-- 测试定义时跳转props -->
    <!-- <router-link :to="{name : 'list',params:{a : 1, b : 2}}">跳到列表页</router-link> -->
    <!-- <router-link :to="{name:'list',params:{a:10,b:20}}">跳列表页</router-link> -->
    <!-- <input type="button" value="跳到列表页" @click="go('/list')" /> -->
  </div>
</template>
<script>
import Qs from "qs";
export default {
  data: function() {
    //验证密码和确认密码
    var checkPass = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    //验证用户名是否存在
    var checkName = async (rule, value, callback) => {
      let { data } = await this.$axios.get(
        "http://localhost:1911/users/check",
        {
          params: {
            name: this.ruleForm.username
          }
        }
      );
      if (data.code == 1) {
        //可以注册
        callback();
      } else {
        //不能注册
        callback(new Error("用户名已存在!"));
      }
      window.console.log(data);
      window.console.log(rule, value, callback);
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { validator: checkName, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ],
        checkPass: [
          { required: true, message: "请输入确认密码", trigger: "blur" },
          { validator: checkPass, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // alert("注册成功!");

          //需求：发起请求，实现注册功能
          let { username: name, password } = this.ruleForm;
          var datastr = Qs.stringify({ name, password });
          let { data } = await this.$axios.post(
            "http://localhost:1911/users/reg",
            datastr,
            {
              headers: { "Content-Type": "application/x-www-form-urlencoded" }
            }
          );

          //成功就跳转到登录页并把用户名带过去
          if (data.code) {
            this.$router.push({
              name: "login",
              query: { name },
              params: { name }
            });
          } else {
            alert("注册失败");
          }

          window.console.log(data);

          //需求：注册成功跳转到登陆页，并且把用户名带过去
          /*
              内置属性：
              $router : Vuerouter 引入的第三方模块，注入vue实例里面
                * push(str/object) 实现路由跳转，会保存记录到history
                * replace(str/object)实现路由跳转，不会保存记录到history
                * go()
                * back()
                * forward()
              $route : 当前实例,用途：路由传参
                * params
                * query
          */
          // window.console.log(this); //当前实例，reg.vue

          // this.$router.push({ name: "login" });//单纯的实现页面跳转

          //要携带数据，必须是写name的方式，params传参，只支持name方式跳转
          // let { username } = this.ruleForm;
          // this.$router.push({ name: "login", params: { username } }); //单纯的实现页面跳转

          // this.$router.push({
          //   name: "login",
          //   params: { username },
          //   query: { username }
          // }); //单纯的实现页面跳转

          //动态路由
          // this.$router.push("/login/" + username);
          // this.$router.push({ name: "login", params: { id } });
        } else {
          window.console.log("注册失败!!");
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