<script setup>
import bdm from "./components/bdm.vue";
import headerMenu from "./components/headerMenu.vue";
import baiduMap from "./components/BaiduMap.vue";
</script>

<template>
  <headerMenu />
  <div id="nav">
    <div id="aside">侧边栏</div>
    <div id="map1">
      <!-- <bdm /> -->
      <baiduMap></baiduMap>
    </div>
  </div>
</template>

<style scoped>
#nav {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 93vh;
  width: 100vw;
}

#aside {
  margin: 0;
  padding: 0;
  height: 93vh;
  width: 20vw;
}

#map1 {
  margin: 0;
  padding: 0;
  height: 93vh;
  width: 80vw;
}
</style>
