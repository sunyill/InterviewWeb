<template>
  <el-card>
    <el-form :model="loginForm" ref="myLoginForm" label-width="100px">
      <el-form-item label="手机号" prop="phone">
        <el-input placeholder="请输入手机号" v-model="loginForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input type="password" placeholder="请输入验证码" v-model="loginForm.code"></el-input>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        phone: '',
        code: ''
      }
    }
  }
}
</script>

<style lang='less' scoped>
.el-card {
  display: flex;
  width: 100%;
  height: 100vh;
  background-size: contain;
  justify-content: center;
  align-items: center;
  background: url("../../assets/img/login_bg.jpg");
  .el-form {
    width: 400px;
    height: 300px;
    background: #ccc;
    .el-form-item {
        padding: 15px;
    }
  }
}
</style>
