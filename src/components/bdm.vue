<script setup>
import {  BMap } from 'vue3-baidu-map-gl'
import { ref } from 'vue'
import { ArrowDown, CopyDocument, Search, } from '@element-plus/icons-vue'


const iconcolor = ref('#00000066')
const value = ref('BMAP_NORMAL_MAP')
const input = ref('')
const input2 = ref('')
const select = ref('地址')
const displaywangge = ref(false)
const options = [
  {
    value: 'BMAP_NORMAL_MAP',
    label: '标准地图',
  },
  {
    value: 'BMAP_SATELLITE_MAP',
    label: '卫星地图',
  },
]

const value1 = ref('')
const options1 = [
  {
    value: '1',
    label: '点位图',
  },
  {
    value: '2',
    label: '热点图',
  },
]
const layer = ref('')
const checkAll = ref(false)
const indeterminate = ref(false)
const layers = ref([
  {
    value: '1',
    label: '4G图层',
  },
  {
    value: '2',
    label: '5G图层',
  },
])

const clickmark = ref({})
const visiblemark = ref(false)
const handleMapClick = (e) => {
  input.value = e.latlng.lng.toFixed(6) + ',' + e.latlng.lat.toFixed(6)
  clickmark.value = e.latlng
  visiblemark.value = true
}
const rightclick = (e) => {
  visiblemark.value = false
}
const handleTilesLoaded = (e) => {
  console.log(e)

  // 获取地图对象
  // const map = this.$refs.map.map;

  // // 获取视口左上角和右下角的经纬度
  // const bounds = map.getBounds();
  // const topLeft = bounds.getNorthWest(); // 左上角
  // const bottomRight = bounds.getSouthEast(); // 右下角

  // console.log('左上角经纬度:', topLeft.lng, topLeft.lat);
  // console.log('右下角经纬度:', bottomRight.lng, bottomRight.lat);
}

</script>
<template>
  <div id="map">
    <div class="concorl">
      <!-- 搜索栏 -->
      <el-input v-model="input2" style="max-width: 500px;margin-left: 20px;" placeholder="请输入经纬度或地址"
        class="input-with-select">
        <template #prepend>
          <el-select v-model="select" placeholder="select" style="width: 80px">
            <el-option label="地址" value="地址" />
            <el-option label="百度" value="百度" />
            <el-option label="谷歌" value="谷歌" />
          </el-select>
        </template>
        <template #append>
          <el-button :icon="Search" style="color: black;" />
        </template>
      </el-input>
      <!-- 切换地图-->
      <el-icon :size="20" :color="iconcolor" style="margin-left:30px;">
        <MapLocation />
      </el-icon>
      <el-select v-model="value" placeholder="选择图层" size="default" style="width: 140px;margin-left:5px;">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <!-- 获取经纬度-->
      <el-icon :size="20" :color="iconcolor" style="margin-left:30px;">
        <Location />
      </el-icon>
      <el-input class="copylanlat" v-model="input" style="width: 240px;margin-left:10px;" placeholder="获取经纬度"
        :suffix-icon="CopyDocument" />
      <!-- 显示网格 -->
      <el-text class="mx-1">显示网格图层</el-text>
      <el-switch class="displaywangge" v-model="displaywangge" inline-prompt active-text="是" inactive-text="否" />

      <!-- 选择图层-->
      <el-select v-model="layer" multiple clearable collapse-tags placeholder="工参图层" popper-class="custom-header"
        :max-collapse-tags="1" style="width: 100px">
        <template #header>
          <el-checkbox v-model="checkAll" :indeterminate="indeterminate" @change="handleCheckAll">
            All
          </el-checkbox>
        </template>
        <el-option v-for="item in layers" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>

      <!-- 切换投诉图层 -->
      <el-icon :size="20" :color="iconcolor" style="margin-left:30px;">
        <Postcard />
      </el-icon>
      <el-select v-model="value1" placeholder="投诉图层" size="default" style="width: 140px;margin-left:5px;">
        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <!-- 地图 -->
    <BMap :zoom="18" :center="{ lng: 113.816485, lat: 22.682404 }" :enableScrollWheelZoom="true" height=90vh
      :mapType="value" @click="handleMapClick" @tilesloaded="handleTilesLoaded" @rightclick="rightclick">

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
