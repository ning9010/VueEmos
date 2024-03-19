<script setup>
import { BMap } from "vue3-baidu-map-gl";
import { ref } from "vue";
import { ArrowDown, CopyDocument, Search } from "@element-plus/icons-vue";
import { GeoJsonToBaiduMap } from "@/utils";
import geojson from "@/geojson/深圳0125.json";
const iconcolor = ref("#00000066");
const value = ref("BMAP_NORMAL_MAP");
const input = ref("");
const input2 = ref("");
const select = ref("地址");
const displaywangge = ref(false);
const options = [
  {
    value: "BMAP_NORMAL_MAP",
    label: "标准地图",
  },
  {
    value: "BMAP_SATELLITE_MAP",
    label: "卫星地图",
  },
];

const value1 = ref("");
const options1 = [
  {
    value: "1",
    label: "点位图",
  },
  {
    value: "2",
    label: "热点图",
  },
];
const layer = ref("");
const checkAll = ref(false);
const indeterminate = ref(false);
const polygonPath = [
  { lng: 116.3, lat: 39.8 },
  { lng: 116.4, lat: 39.9 },
  { lng: 116.5, lat: 39.85 },
];
const layers = ref([
  {
    value: "1",
    label: "4G图层",
  },
  {
    value: "2",
    label: "5G图层",
  },
]);

const clickmark = ref({});
const visiblemark = ref(false);
const handleMapClick = (e) => {
  input.value = e.latlng.lng.toFixed(6) + "," + e.latlng.lat.toFixed(6);
  clickmark.value = e.latlng;
  visiblemark.value = true;
};
const rightclick = (e) => {
  visiblemark.value = false;
};
const baiduData = GeoJsonToBaiduMap(geojson);

const handleTilesLoaded = (e) => {
  console.log(e);

  // 获取地图对象
  const map = e.currentTarget;

  // // 获取视口左上角和右下角的经纬度
  const bounds = map.getBounds();
  const northEast = bounds.getNorthEast(); // 右上角
  const southWest = bounds.getSouthWest(); // 左下角

  console.log('左上角经纬度:', northEast.lng, northEast.lat);
  console.log('右下角经纬度:', southWest.lng, southWest.lat);
};
</script>
<template>
  <div id="map">
    <!-- 地图 -->
    <BMap :zoom="14" :center="{ lng: 113.816485, lat: 22.682404 }" :enableScrollWheelZoom="true" height="90vh"
      :mapType="value" @click="handleMapClick" @tilesloaded="handleTilesLoaded" @rightclick="rightclick">
      <template v-for="(item, id) in baiduData" :key="id">
        <bPolygon :path="item" :strokeColor="'#FF33FF'" :strokeWeight="2" />
      </template>
      <BMarker :position="clickmark" icon="red1" :visible="true" />

      <BScale />
      <BLocation />
    </BMap>
  </div>
</template>

<style scoped>
#map {
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid rgba(180, 180, 180, 0.1);
}

.concorl {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  float: left;
  height: 5vh;
  z-index: 99;
  background: hsla(0, 0%, 100%, 0.75);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(34, 34, 34, 0.1);
  display: flex;
  justify-content: left;
  align-items: center;
}

.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}

.mx-1 {
  margin-left: 30px;
  margin-right: 5px;
}

.displaywangge {
  margin-right: 30px;
}
</style>
