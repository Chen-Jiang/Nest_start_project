<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <div class="wrapper">-->
<!--      <ejs-maps id='maps'></ejs-maps>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>
<!--  <div id="map">-->
<!--    <div class='wrapper'>-->
<!--      <ejs-maps >-->
<!--        <e-layers>-->
<!--          <e-layer :shapeData='shapeData' ></e-layer>-->
<!--        </e-layers>-->
<!--      </ejs-maps>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import Vue from 'vue';-->
<!--import { MapsPlugin } from '@syncfusion/ej2-vue-maps';-->
<!--import { nz_map } from './nz-map';-->
<!--Vue.use(MapsPlugin);-->
<!--export default {-->
<!--  data (){-->
<!--    return{-->
<!--      shapeData: nz_map-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
