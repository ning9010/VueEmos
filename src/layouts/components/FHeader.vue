<template>
  <div class="f-header">
    <span class="logo">
      <el-avatar
        class="mr-1"
        shape="square"
        size="large"
        src="../../../public/logo.ico"
      />
      中国移动管理系统
    </span>
    <el-icon class="icon-btn" @click="$store.commit('handleAsideWidth')">
    </el-icon>
    <el-tooltip effect="dark" content="刷新" placement="bottom">
      <el-icon class="icon-btn" @click="handleRefresh">
        <refresh />
      </el-icon>
    </el-tooltip>

    <div class="ml-auto flex items-center fr">
      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <el-icon class="icon-btn" @click="toggle">
          <full-screen v-if="!isFullscreen" />
          <aim v-else />
        </el-icon>
      </el-tooltip>

      <el-dropdown class="dropdown" @command="handleCommand">
        <span class="flex items-center text-light-50">
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="rePassword">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { useFullscreen } from "@vueuse/core";
const {
  // 是否全屏状态
  isFullscreen,
  // 切换全屏
  toggle,
} = useFullscreen();

// 刷新
const handleRefresh = () => location.reload();
</script>
<style>
.f-header {
  @apply flex items-center  text-light-50 fixed top-0 left-0 right-0;
  background-color: #007fcc;
  height: 64px;
  z-index: 1000;
  .fr {
    width: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}

.logo {
  width: 280px;
  @apply flex justify-center items-center text-xl font-thin;
}

.icon-btn {
  @apply flex justify-center items-center;
  width: 42px;
  height: 64px;
  cursor: pointer;
}

.icon-btn:hover {
  /* @apply bg-indigo-600; */
  color: #007fcc;
}

.f-header .dropdown {
  height: 64px;
  cursor: pointer;
  @apply flex justify-center items-center mx-5;
}
</style>
