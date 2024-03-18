<template>
  <div class="bmap" id="container"></div>
</template>
<script>
import { GeoJsonToBaiduMap } from "@/utils";
import geojson from "@/geojson/深圳0125.json";
export default {
  name: "BaiduMap",
  mounted() {
    var map = new window.BMapGL.Map("container", {
      enableRotate: false,
      enableTilt: false,
    });
    var point = new window.BMapGL.Point("113.86700", "22.81792");
    map.centerAndZoom(point, 14);
    map.enableScrollWheelZoom();
    // map.setHeading(64.5); //设置地图旋转角度
    // map.setTilt(73); //设置地图的倾斜角度
    map.setMapType(BMAP_SATELLITE_MAP);

    var scaleCtrl = new window.BMapGL.ScaleControl();
    map.addControl(scaleCtrl);
    var zoomCtrl = new window.BMapGL.ZoomControl();
    map.addControl(zoomCtrl);
    var cityCtrl = new window.BMapGL.CityListControl();
    map.addControl(cityCtrl);

    const baiduData = GeoJsonToBaiduMap(geojson);

    for (var i = 0; i < baiduData.length; i++) {
      var polyline = new BMapGL.Polyline(baiduData[i], {
        strokeColor: "blue",
        strokeWeight: 2,
        strokeOpacity: 0.5,
      });
      map.addOverlay(polyline);
    }
  },
};
</script>
<style scoped>
.bmap {
  width: 100%;
  height: 600px;
  border: 1px solid #000;
  margin-left: 12px;
}
</style>
