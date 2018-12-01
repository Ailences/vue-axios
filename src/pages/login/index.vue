<template>
  <div class="login-container">
    <h1 class="title">用户登录</h1>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名:">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密　码:">
        <el-input type="password" v-model="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" class="login-btn" @click="handleLogin">立即注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      //   console.log("执行登录操作!");
      axios
        .post("http://127.0.0.1:8888/api/private/v1/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log(res);
          if (res.data.meta.status === 200) {
            //   成功跳转到首页
            this.$message({
              message: "恭喜您!登录成功!",
              type: "success",
              center: "true"
            });
            this.$router.push("/home");
            // 将token存储到本地
            localStorage.setItem("token", res.data.data.token);
          } else {
            this.$message({
              message: "很遗憾!登录失败!",
              type: "error",
              center: "true"
            });
          }
        });
    }
  }
};
</script>


<style lang="less">
.login-container {
  width: 500px;
  margin: 150px auto;
  .title {
    text-align: center;
    margin: 20px 0;
    font-size: 24px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
