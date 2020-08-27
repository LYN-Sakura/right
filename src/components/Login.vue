<template>
  <div class="login">
    <div class="login_box">
      <div class="avatar_img"><img src="../assets/logo.png" alt="" /></div>
      <el-form
        class="login_form"
        ref="loginRef"
        :rules="login_rules"
        :model="user"
      >
        <el-form-item prop="username">
          <el-input
            prefix-icon="iconfont icon-user"
            class="user_input"
            placeholder="请输入账号"
            v-model="user.username"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            prefix-icon="iconfont icon-3702mima"
            class="user_input"
            placeholder="请输入密码"
            v-model="user.password"
            show-password
            @keyup.enter.native="onSubmit('loginRef')"
          ></el-input>
        </el-form-item>
        <el-form-item class="login_btn">
          <el-button type="primary" @click="onSubmit('loginRef')">
            登录
          </el-button>
          <el-button @click="resetForm('loginRef')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      login_rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const { data: res } = await this.$http.post('login', this.user);
          if (res.meta.status !== 200) {
            this.$message.error('登陆失败');
            return false;
          } else {
            this.$message({
              message: '登录成功',
              type: 'success'
            });
            window.localStorage.setItem('token', res.data.token);
          }
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background-color: #2d4d6d;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_img {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 10px #eee;
  padding: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 100%;
    height: 100%;
    background-color: #eee;
    border-radius: 50%;
  }
}
.login_form {
  margin-top: 20%;
  padding: 0 20px;
  .user_input {
    width: 100%;
  }
  .login_btn {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
