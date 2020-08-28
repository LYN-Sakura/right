<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
          <el-button type="infor" @click="goOut">退出登录</el-button>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
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

<style lang="less" scoped></style>
