<template>
  <div>
    <van-swipe-item>
      <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
    </van-swipe-item>
    <van-button type="primary" @click.native="goreg">注册</van-button>
    <van-button type="info" @click.native="gologin">登录</van-button>

    <!-- 九宫格 -->
    <van-grid>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>

    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
        error-message="手机号格式错误"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        error-message="手机号格式错误"
      />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    goreg() {
      // window.console.log("触发了");
      this.$router.push("/reg");
    },
    gologin() {
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
</style>