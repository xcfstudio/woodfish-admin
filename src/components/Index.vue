<template>
  <div class="common-layout">
    <el-container class="main-container">
      <el-aside width="auto">
        <LeftMenu />
      </el-aside>
      <el-container class="right-container">
        <el-header>
          <div class="header-container">
            <div class="left">
              <span>仪表盘</span>
            </div>
            <div class="right">
              <img class="avatar" src="https://q1.qlogo.cn/g?b=qq&nk=3146315882&s=640" alt="">
              <span class="username">Username</span>
              <span class="logout">[退出登陆]</span>
            </div>
          </div>
        </el-header>
        <el-main>
          <RouterView/>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script lang="ts" setup>
import LeftMenu from './menu-left/LeftMenu.vue'
</script>

<style lang="less" scoped>
.common-layout {
  height: 100%;

  .main-container {
    height: 100%;

    .right-container {
      .el-header {
        // background-color: rgb(48, 136, 238);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.07);
      }

      .header-container {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .right {
          display: flex;
          align-items: center;

          .avatar {
            width: 40px;
            border-radius: 50%;
          }
          .username {
            margin-left: 10px;
            font-weight: bold;
          }
          .logout {
            margin-left: 20px;
            color: rgb(87, 87, 87);
          }
        }
      }
    }
  }
}
</style>