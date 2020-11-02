<template>
  <div id="app">
    <div class='wrapper' :baseLayerIndex="baseLayerIndex">
      <ejs-maps>
        <e-layers>
          <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' ></e-layer>
<!--          <e-layer :shapeData='shapeData1' :type = 'type' :shapeSettings='shapeSettings1' ></e-layer>-->
        </e-layers>
      </ejs-maps>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin } from '@syncfusion/ej2-vue-maps';
import { nz } from './nz-map.js';
import { pncc } from './PNCC_Area_Units';
Vue.use(MapsPlugin);
export default {
  data () {
    return{
      baseLayerIndex: 1,
      shapeData: nz,
      shapeSettings: {
        fill: '#9CBF4E',
        border: { width: 1.5, color: 'White' },
      },
      shapeData1: pncc,
      type: 'SubLayer',
      shapeSettings1: {
        fill: 'black',
        border: { width: 5.5, color: 'Black' },
      },
    }
  },
}
</script>
<style>
.wrapper {
  max-width: 4000px;
  margin: 0 auto;
}
</style>
