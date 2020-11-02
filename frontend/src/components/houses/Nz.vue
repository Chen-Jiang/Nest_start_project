<template>
<svg-map :map="NewZealand" />
</template>

<script>
import { SvgMap } from 'vue-svg-map';
import NewZealand from '@svg-maps/new-zealand';
export default {
  name: "NZ",
  components: {
    SvgMap
  },
  data() {
    return {
      NewZealand
    }
  }
}
</script>

<style src="vue-svg-map/dist/index.css"></style>

