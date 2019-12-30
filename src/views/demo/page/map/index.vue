<template>
  <d2-container>
    <div style="display:inline-block;border:1px solid black;width:49%;height:700px;">
      <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:100%" @click="getClickInfo" :scroll-wheel-zoom='true'>
    </baidu-map>
    </div>
    <div style="display:inline-block;border:1px solid black;width:49%;margin-left:10px;height:700px;">
      <div id="allmap" ref="allmap"></div>
    </div>
  </d2-container>
</template>
<script>
export default {
  name: 'map',
data () {
    return {
      center: {lng: 109.45744048529967, lat: 36.49771311230842},
      zoom: 13
    }
  },
  mounted() {
    //在mounted中执行地图方法，mapData为要展示的数据
    // this.initMap(mapData);
    },
  methods: {
    handler ({BMap, map}) {
      var point = new BMap.Point(109.49926175379778, 36.60449676862417)
      map.centerAndZoom(point, 13)
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
      map.addOverlay(circle)
    },
    getClickInfo (e) {
      console.log(e.point.lng)
      console.log(e.point.lat)
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    },
    //谷歌
    
  }
}
</script>