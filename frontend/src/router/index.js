import Vue from 'vue'
import VueRouter from 'vue-router'
import bootstrap from 'bootstrap-vue'
import Table from "@/components/houses/Table";
import { MapsComponent, MapsPlugin } from '@syncfusion/ej2-vue-maps';
// import Maps from "@/components/houses/Maps";
// import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
// import NZ from '../components/houses/Nz';
import EXP from '../components/houses/EXP';
import Home from '../components/houses/Home';
import Create from "@/components/houses/Create";

Vue.use(VueRouter)
Vue.use(bootstrap)
Vue.use(MapsPlugin)
Vue.component(MapsPlugin.name, MapsComponent);


const routes = [
  {
    path: '/',
    name: 'EXP',
    component: EXP
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/maps',
    name: 'table',
    component: Table
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
