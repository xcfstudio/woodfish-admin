<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <LeftMenu />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
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

  .el-container {
    height: 100%;

    
  }
}
</style>