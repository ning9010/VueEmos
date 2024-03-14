<template>
  <div class="bmap" id="container"></div>
</template>
<script>
import { GeoJsonToBaiduMap } from "@/utils";
import geojson from "@/geojson/深圳0125.json";
export default {
  name: "BaiduMap",
  mounted() {
    var map = new window.BMapGL.Map("container");
    var point = new window.BMapGL.Point("113.86700", "22.81792");
    map.centerAndZoom(point, 14);
    map.enableScrollWheelZoom();

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
  width: 800px;
  height: 600px;
  border: 1px solid #000;
}
</style>
