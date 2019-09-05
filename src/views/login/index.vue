<!--
 * @Description: In User Settings Edit
 * @Author: wangzhan
 * @Date: 2019-09-01 23:08:41
 * @LastEditTime: 2019-09-05 08:17:13
 * @LastEditors:wangzhan
 -->

<template>
  <el-card>
    <el-form ref="myLoginForm" :model="loginForm"  :rules="myrules">
      <div class="login_view">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <el-form-item prop="mobile" class="first-item">
        <el-input placeholder="请输入手机号" v-model="loginForm.mobile"></el-input>
      </el-form-item>
      <el-form-item prop="code" class="inputVer">
        <el-input type="password" class="inputCode" placeholder="请输入验证码" v-model="loginForm.code"></el-input>
        <el-button type="primary" class="sendCode">发送验证码</el-button>
      </el-form-item>

      <el-form-item prop="check">
        <el-checkbox label="你已同意登录协议" v-model="loginForm.check" name="type"></el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="success" style="width:100%" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    /**
     * @description: 触发了一个自定义函数
     * @param {type}
     * @return:
     */
    var muFun = function (rule, value, callback) {
      // rulu 表示规则,没什么用, value 表示表单中的值,
      if (value) {
        callback()
      } else {
        callback(new Error('你必须同意被坑'))
      }
    }
    return {
      loginForm: {
        mobile: '13911111111',
        code: '246810',
        check: false
      },
      myrules: {
        mobile: [
          { required: true, message: '登录手机号不能为空' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '验证码不能为空' },
          { pattern: /^\d{6}$/, message: '验证码必须为6位数字' }
        ],
        check: [{
          validator: muFun // 自定义函数
        }]
      }
    }
  },
  methods: {
    /**
     * @description:登录事件
     * @param {type}
     * @return:
     */
    login () {
      this.$refs.myLoginForm.validate(isOK => {
        if (isOK) {
          console.log('前端界面校验成功')
          this.$axios({
            method: 'post',
            data: this.loginForm,
            url: '/authorizations'
          }).then((res) => {
            console.log(res.data.data)
            window.localStorage.setItem('user-info', JSON.stringify(res.data.data))
            this.$router.push('/home')
          })
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.el-card {
  display: flex;
  width: 100%;
  height: 100vh;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background: url("../../assets/img/login_bg.jpg");
  background-size: cover;
  .el-form {
    width: 400px;
    height: 300px;
    padding: 15px;
    background: #fff;
    .login_view {
      height: 30px;
      width: 200px;
      margin: 10px auto;
      padding-bottom: 10px;
      img {
        width: 100%;
      }
    }
    .inputVer {
      .inputCode {
        width: 65%;
      }
      .sendCode {
        width: 30%;
        margin-left: 15px;
      }
    }
  }
}
</style>
