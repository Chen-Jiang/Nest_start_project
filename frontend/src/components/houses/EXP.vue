<template>
  <div class="wrapper">
    <ejs-maps ref="maps" id='container' align="center" :titleSettings='titleSettings' :zoomSettings="zoomSettings" :mapsArea='mapsArea'>
      <e-layers>
        <e-layer :shapeData='shapeData1' :tooltipSettings="tooltipSettings" :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource="dataSource" :shapeSettings="shapeSettings"></e-layer>
      </e-layers>
    </ejs-maps>

<!--    <input type="submit" onclick="fetchData()" value="Click Me!">-->
<!--    <button v-on:click="fetchData">Click</button>-->

  </div>


</template>

<script>
import { area } from './fix';
// import { crime_data } from './crime';
// import { world } from "@/components/houses/world_map";
import { Zoom, MapsTooltip } from '@syncfusion/ej2-vue-maps';
import axios from "axios";
import {server} from "@/helper";

export default {
  name: "EXP",
  data() {
    return {
      dataSource: [],
      // layerType: 'OSM',
      shapeData1: area,
      shapeDataPath: 'Name',   // the data id in the dataSource
      shapePropertyPath: 'TA2018_V_1',    // the column name in shapeData
      zoomSettings: {
        enable: true,
        pinchZooming: true
      },
      titleSettings: {
        text: 'Crime Situation of New Zealand 2019-2020',
        textStyle: {
          size: '26px'
        }
      },
      mapsArea: {
        background: '#AEE2FA',
        width: '2000px',
        height: '2000px'
      },
      tooltipSettings: {
        visible: true,
        valuePath: 'Name',
        format: 'Area: ${Name} <br> Crime: ${Crime}',
        textStyle: {
          size: '20px'
        }
      },
      // dataSource: crime_data,
      // dataLabelSettings: {
      //   visible: true,
      //     labelPath: 'Name'
      // },
      shapeSettings: {
        border: {
          width: 0.8,
          color: 'white'
        },
        colorValuePath: "Crime",
        fill: '#ccddff',
        colorMapping: [
          {
            from: 0, to: 50, color: '#ccddff'
          },
          {
            from: 51, to: 500, color: '#b3ccff'
          },
          {
            from: 501, to: 1000, color: '#80aaff'
          },
          {
            from: 1001, to: 2000, color: '#4d88ff'
          },
          {
            from: 2001, to: 4000, color: '#0055ff'
          },
          {
            from: 4001, to: 6000, color:  '#ff6666'
          },
          {
            from: 6001, to: 15000, color:  '#ff3333'
          },
          {
            from: 15001, to: 100000, color: '#ff0000'
          }
        ]
      },
      // layerType: 'Geometry'
    }
  },
  provide: {
    maps: [Zoom, MapsTooltip]
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData(){
      axios.get(`${server.baseURL}/house/all`).then(data => {
        this.dataSource = data.data;
        console.log("Got data:", data.data);
        return this.dataSource;
      });
    }
  }
}
</script>

<style scoped>

</style>

<style>
.wrapper {
  width: 800px;
  height: 2000px;
  margin: 0 auto;
}

#container {
  height:  1000px;
  width: 1000px;
}

svg {
  width: 6000px;
  height: 2500px;
}

/*rect {*/
/*  width: 2000px;*/
/*  height: 2000px;*/
/*}*/

/*container_MapAreaBorder {*/
/*  margin-left: -50%;*/
/*}*/



</style>

