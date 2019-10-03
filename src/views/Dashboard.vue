<template>
  <div class="container-fluid text-center">
    <h1 class="mt-4">Canvas</h1>
    <button class="mt-4 btn btn-outline-info d-block">Expand canvas</button>
    <span>Change color: </span>
    <Palets  @change-color="changeColor"/>
    <div class="mt-5 canvas d-inline-block" :style="{backgroundColor:canvasColor}" @mousemove="coordinates">({{corX}},{{corY}})</div>
  </div>
</template>

<script>
import Palets from "../components/Palets"
export default {
  name: 'dashboard',
  components: {
    Palets
  },
  data() {
    return {
      corX: '0',
      corY: '0',
      canvasColor: 'aquamarine'
      
    }
  },
  methods: {
    coordinates(event) {
      this.corX = event.offsetX;
      this.corY = event.offsetY;
    },
    changeColor(color) {
      this.canvasColor = color;
    }
  }
}
</script>

<style scoped>
  .canvas {
    width: 300px;
    height: 300px;
    border: 2px solid darkblue;
    color: red;
    padding-top: 140px;
    background-color: aquamarine;
  }
  
</style>
