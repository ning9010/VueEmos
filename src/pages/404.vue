<template>
  <el-result title="404提示" sub-title="页面走丢了~~">
    <template #icon>
      <el-image
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      />
    </template>
    <template #extra>
      <el-button type="primary" @click="back">Back</el-button>
    </template>
  </el-result>
</template>
<script setup>
const back = () => {
  history.back();
};
</script>
