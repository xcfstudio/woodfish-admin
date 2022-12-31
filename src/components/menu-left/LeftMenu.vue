<template>

  <el-menu default-active="dashboard" class="el-menu-vertical-demo" :collapse="isLeftMenuCollapse" :router="true">
    <div class="top-title"><span v-if="!isLeftMenuCollapse">系统后台</span></div>

    <el-menu-item index="dashboard">
      <el-icon>
        <Odometer />
      </el-icon>
      <template #title>仪表盘</template>
    </el-menu-item>

    <el-menu-item index="users">
      <el-icon>
        <User />
      </el-icon>
      <template #title>用户管理</template>
    </el-menu-item>

    <el-menu-item index="score">
      <el-icon><Coin /></el-icon>
      <template #title>功德管理</template>
    </el-menu-item>

    <el-menu-item index="issues">
      <el-icon><Service /></el-icon>
      <template #title>用户反馈</template>
    </el-menu-item>

    <el-menu-item index="version">
      <el-icon><Lightning /></el-icon>
      <template #title>版本控制</template>
    </el-menu-item>

    <el-menu-item index="cache">
      <el-icon><Coordinate /></el-icon>
      <template #title>缓存控制</template>
    </el-menu-item>

    <el-menu-item index="superadmin">
      <el-icon><Magnet /></el-icon>
      <template #title>超管设置</template>
    </el-menu-item>

    <el-menu-item index="myinfo">
      <el-icon><Postcard /></el-icon>
      <template #title>个人信息</template>
    </el-menu-item>

  </el-menu>
</template>
  
<script lang="ts" setup>
import {
Coin,
  Coordinate,
  Lightning,
  Magnet,
  Menu as IconMenu,
  Odometer,
  Postcard,
  Service,
  User
} from '@element-plus/icons-vue'

import { useUIStore } from '@/store/UI';
import { storeToRefs } from 'pinia';
const UIStore = useUIStore()
const { isLeftMenuCollapse } = storeToRefs(UIStore)


</script>
  
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  height: 100%;
 .el-menu-item {
  .el-icon {
    margin-left: 20px;
  }
 }
}

.top-title {
  padding: 30px 0;
  text-align: center;
}
</style>
  