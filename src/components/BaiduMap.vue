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
        strokeWeight: 4,
        strokeOpacity: 0.3,
      });
      map.addOverlay(polyline);
    }

    function createDOM(feature) {
      const img = document.createElement('img');
      img.style.height = '240px';
      img.style.width = '80px';
      img.src = 'https://bj.bcebos.com/v1/mapopen-pub-jsapigl/assets/images/fire.gif';
      img.draggable = false;
      return img;
    }

    // 自定义图层
    const cusLayer = new BMapGL.CustomHtmlLayer(createDOM, {
      offsetX: 0,
      offsetY: 0,
      minZoom: 12,
      maxZoom: 20,
      enablePick: true,
      enableDraggingMap: true
    });

    const data = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [113.86700, 22.81792]
          },
          "properties": { "prop0": "value0" }
        }
      ]
    };
    // 设置图层数据
    cusLayer.setData(data);

    // 将自定义html图层添加到地图上
    map.addCustomHtmlLayer(cusLayer);

    // 覆盖物绑定点击事件
    cusLayer.addEventListener('click', function (e) {
      console.log('e:', e)
    });
  },
};
</script>
<style scoped>
.bmap {
  width: 100%;

  height: 850px;

  border: 1px solid #000;
  margin-left: 12px;
}
</style>
