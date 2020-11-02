<template>
  <div>
    <div class="control-section">
      <ejs-maps id='container' align="center" format='n' :useGroupingSeparator='useGroupingSeparator' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :legendSettings='legendSettings'>
        <e-layers>
          <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :tooltipSettings='tooltipSettings' :shapeSettings='shapeSettings'></e-layer>
        </e-layers>
      </ejs-maps>

      <div style="float: right; margin-right: 10px;">Source:
        <a href="https://en.wikipedia.org/wiki/List_of_states_and_union_territories_of_India_by_population" target="_blank">en.wikipedia.org</a>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { MapsPlugin,Legend, Marker, MapsTooltip, Zoom } from '@syncfusion/ej2-vue-maps';
import { nz } from "./nz-map";
import axios from 'axios';
import { server } from "@/helper";
// import { area } from './area';

Vue.use(MapsPlugin);
export default Vue.extend({
  data:function(){
    return{
      layerType: 'OSM',
      useGroupingSeparator: true,
      titleSettings: {
        text: "Community Crime Situation in New Zealand",
        textStyle: {
          size: '16px'
        }
      },
      legendSettings: {
        visible: true,
        mode: 'Interactive',
        position: 'Bottom',
        height: '10',
        width: '350',
        labelDisplayMode: 'Trim',
        alignment: 'Center'
      },
      zoomSettings: {
        enable: true,
        enablePanning: true,
        toolBars: ["Zoom", "ZoomIn", "ZoomOut", "Pan", "Reset"],
        zoomFactor:8
      },
      shapeData: nz,
      shapePropertyPath: 'NAME_1',
      shapeDataPath: 'Name',
      dataSource: {},
      tooltipSettings: {
        visible: true,
        valuePath: 'population',
        format: 'Community: ${Name} <br> Crime: ${population}'
      },
      shapeSettings: {
        border: {
          width: 0.8,
          color: 'white'
        },
        colorValuePath: 'population',
        colorMapping: [{
          from: 0, to: 10, color: '#9fdfdf', label: '<0.4M'
        },
          {
            from: 10, to: 20, color: '#79d2d2', label: '0.4-10M'
          },
          {
            from: 20, to: 40, color: '#53C6C6', label: '10-20M'
          },
          {
            from: 40, to: 80, color: '#39acac', label: '20-70M'
          },
          {
            from: 80, to: 100, color: '#339999', label: '70-100M'
          },
          {
            from: 100, to: 200000000, color: '#2d8686', label: '>100M'
          }
        ]
      }
    }
  },
  provide: {
    maps: [Legend, Marker, MapsTooltip, Zoom]
  },
  created() {
    this.fetchData();
    console.log("source: ", this.dataSource)
  },
  methods: {
    async fetchData(){
      axios.get(`${server.baseURL}/house/all`).then(data => {
        this.dataSource = data.data;
        return this.dataSource;
        // console.log(this.dataSource);
      });
    }
  }

})
</script>
