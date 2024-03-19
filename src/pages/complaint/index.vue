<template>
  <div class="maps"><BaiduMap /><bdm /></div>
</template>

<script setup>
import BaiduMap from "@/components/BaiduMap.vue";
import bdm from "@/components/bdm.vue";
</script>

<style scoped>
.maps {
  height: 500px;
  display: flex;
}
</style>
