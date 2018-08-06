<template>
    <div class="intime-view">
        <div class="map-container">
            <el-amap class="amap-box" :vid="'amap-vue'" 
            :center="center" :amap-manager="amapManager"
            :zoom="zoom" :events="events" :map-style="mapStyle"></el-amap>
        </div>
        <el-card class="over-map-card" shadow="always">
          <div class="top-data-wrap" v-for="data in overCardTopData">
            <div class="top-data">
              <span class="data-place">{{data.place}}</span>
              <span class="data-num">{{data.num}}</span>
            </div>
          </div>
          <hr/>
        </el-card>
        
    </div>
</template>
<script>
// written by yinsuqin August 2018'
import VueAMap from "vue-amap"; //可以配置到.eslintrc.json的global,一直没成功

var amapManager = new VueAMap.AMapManager();
export default {
  name: "IntimeView",
  data: function() {
    return {
      zoom: 12,
      center: [121.59996, 31.197646],
      amapManager,
      events: {
        init(o) {
          var marker = new AMap.Marker({
            position: [121.59996, 31.197646]
          });
          marker.setMap(o);
          AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
                const marker = new SimpleMarker({
                  iconLabel: 'A',
                  iconStyle: 'red',
                  map: map,
                  position: map.getCenter()
                });
              });
        }
      },
      mapStyle: "amap://styles/34fce8bb262a5231726f7fe47f3a0a25",
      overCardTopData: [
        { place: "陈毅广场", num: 20378 },
        { place: "滨水广场", num: 21380 },
        { place: "4-8号口", num: 21378 },
        { place: "1-3号口", num: 21378 },
        { place: "南京东路", num: 42338 },
        { place: "9－12号口", num: 353724 }
      ],
      plugins:{
        
      }
    };
  },
  mounted() {
    this.loadmap(); //加载地图和相关组件
  },
  methods: {
    loadmap() {
      const map = new AMap.Map("container", {
        zoom: 9
      });
      AMap.plugin(
        [
          "AMap.ToolBar",
          "AMap.Scale",
          "AMap.OverView",
          "AMap.MapType",
          "AMap.Geolocation"
        ],
        function() {
          // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
          map.addControl(new AMap.ToolBar());

          // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
          map.addControl(new AMap.Scale());

          // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
          map.addControl(new AMap.OverView({ isOpen: true }));

          // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
          map.addControl(new AMap.MapType());

          // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
          map.addControl(new AMap.Geolocation());
        }
      );
    }
  }
};
</script>
<style type="text/scss" lang="scss" scoped>
.intime-view {
  // box-shadow: 0rem 0rem 0.1rem 0.1rem #0e2358; //阴影
  height: 100%;
  .map-container {
    height: 100%;
    .amap-box {
      height: 100%;
    }
  }
  .over-map-card {
    background-color: #071228;
    border: 0.1rem solid #071228;
    position: absolute;
    top: 5.5rem;
    right: 3rem;
    height: 70%;
    width: 24rem;
    // box-shadow: 0rem 0rem 0.2rem 0.2rem #1B356F;
    .top-data-wrap {
      display: inline-block;
      width: 50%;
      .top-data {
        display: inline-block;
        width: 100%;
        .data-place,
        .data-num {
          display: inline-block;
          color: #ffffff;
          margin-left: 1.9rem;
        }
        .data-place {
          font-size: 0.8rem;
        }
        .data-num {
          font-size: 1.8rem;
          padding: 1rem 0rem;
        }
      }
    }
    hr {
      width: 100%;
      margin: 0rem;
      background-color: #263043;
      color: #263043;
      height: 0.11rem;
      border: 0em;
    }
  }
}
</style>
