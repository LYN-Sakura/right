<template>
  <el-container class="home-container">
    <el-header>
      <div class="logo_box">
        <img class="logo_img" src="../assets/logo.png" alt="" />
        <span class="logo_span">后台管理系统</span>
      </div>
      <div class="goOut_box">
        <el-button class="goOut_btn" type="infor" @click="goOut">
          退出登录
        </el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goOut() {
      window.sessionStorage.clear();
      this.$router.push('/login');
      if (this.$route.path === '/login') {
        this.$message.success('安全退出');
      }
    }
  }
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo_box{
    display: flex;
    align-items: center;
    height: 100%;
    .logo_img {
      height: 100%;
    }
    .logo_span {
      margin-left: 30px;
      font-size: 40px;
      font-family: '楷体',serif;
    }
  }
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #ffffff;
}
</style>
