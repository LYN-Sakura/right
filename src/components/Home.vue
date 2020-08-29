<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
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
      <!-- 侧边菜单 -->
      <el-aside width="200px">
        <el-menu
          default-active="1-1"
          :unique-opened="true"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#3975d1"
        >
          <!-- 用户权限 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="icon iconfont icon-users" />
              <span>用户权限</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu" />
              选项1
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-menu" />
              选项2
            </el-menu-item>
          </el-submenu>
          <!-- 权限管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="icon iconfont icon-tijikongjian" />
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1">
              <i class="el-icon-menu" />
              选项1
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-menu" />
              选项2
            </el-menu-item>
          </el-submenu>
          <!-- 商品管理 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="icon iconfont icon-shangpin" />
              <span>商品管理</span>
            </template>
            <el-menu-item index="3-1">
              <i class="el-icon-menu" />
              选项1
            </el-menu-item>
            <el-menu-item index="3-2">
              <i class="el-icon-menu" />
              选项2
            </el-menu-item>
          </el-submenu>
          <!-- 订单管理 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="icon iconfont icon-danju" />
              <span>订单管理</span>
            </template>
            <el-menu-item index="4-1">
              <i class="el-icon-menu" />
              选项1
            </el-menu-item>
            <el-menu-item index="4-2">
              <i class="el-icon-menu" />
              选项2
            </el-menu-item>
          </el-submenu>
          <!-- 数据统计 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="icon iconfont icon-baobiao" />
              <span>数据统计</span>
            </template>
            <el-menu-item index="5-1">
              <i class="el-icon-menu" />
              选项1
            </el-menu-item>
            <el-menu-item index="5-2">
              <i class="el-icon-menu" />
              选项2
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主体部分 -->
      <el-main><router-view /></el-main>
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
  },
  async mounted() {
    const res = await this.$http.get('menus');
    console.log(res);
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
  .logo_box {
    display: flex;
    align-items: center;
    height: 100%;
    .logo_img {
      height: 100%;
    }
    .logo_span {
      margin-left: 30px;
      font-size: 40px;
      color: white;
      font-family: '楷体', serif;
    }
  }
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #ffffff;
}
.icon {
  margin-right: 10px;
}
</style>
