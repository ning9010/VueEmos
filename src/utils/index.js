export function GeoJsonToBaiduMap(geoJSON) {
  let baiduMapData = [];
  for (var i = 0; i < geoJSON.features.length; i++) {
    let feature = geoJSON.features[i];
    let coordinates = feature.geometry.coordinates;
    if (feature.geometry.type === "Point") {
      baiduMapData.push({
        lng: coordinates[0],
        lat: coordinates[1],
      });
    } else if (feature.geometry.type === "LineString") {
      for (var j = 0; j < coordinates.length; j++) {
        baiduMapData.push({
          lng: coordinates[j][0],
          lat: coordinates[j][1],
        });
      }
    } else if (feature.geometry.type === "Polygon") {
      let arr = [];
      for (var k = 0; k < coordinates.length; k++) {
        for (var l = 0; l < coordinates[k].length; l++) {
          arr.push({
            lng: coordinates[k][l][0],
            lat: coordinates[k][l][1],
          });
        }
      }
      baiduMapData.push(arr);
    }
  }
  return baiduMapData;
}
