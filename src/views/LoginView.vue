<template>
  <div class="container">
    <div style="width: 400px; height: 300px; border-radius: 10px">
      <div
        style="
          height: 100px;
          font-size: 30px;
          line-height: 100px;
          text-align: center;
          color: hsla(160, 100%, 37%, 1);
        "
      >
        欢迎登录
      </div>
      <div class="form-container">
        <el-form :model="student" status-icon>
          <el-form-item>
            <el-input
              v-model="student.name"
              style="width: 80%; margin: auto"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-input
              v-model="student.password"
              type="password"
              style="width: 80%; margin: auto"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              style="
                width: 80%;
                margin: auto;
                margin-top: 10px;
                color: hsla(160, 100%, 37%, 1);
              "
              @click="login"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import request from "@/utils/request";
export default {
  name: "login",
  data() {
    return {
      student: {},
    };
  },
  // 页面加载的时候，做一些事情，在created里面
  created() {},
  // 定义一些页面上控件出发的事件调用的方法
  methods: {
    login() {
      request
        .post("/student/login", this.student)
        .then((res) => {
          if (res.code === "0") {
            this.$message({
              message: "登录成功",
              type: "success",
            });
            this.$router.push("/");
            localStorage.setItem("user", JSON.stringify(res.data));
          } else {
            this.$message({
              message: res.msg,
              type: "error",
            });
          }
        })
        .catch((error) => {
          console.error(
            "Error logging in:",
            error.response ? error.response.data : error.message
          );
        });
    },
  },
};
</script>
<style>
.container {
  display: flex;
  align-items: center;
  align-items: center;
  height: 100vh;
}
</style>
