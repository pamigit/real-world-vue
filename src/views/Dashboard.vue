<template>
  <div class="container-fluid text-center">
    <h1 class="mt-4">Canvas</h1>
    <button class="mt-4 btn btn-outline-info d-block">Expand canvas</button>
    <div class="d-block text-left mt-3">
      <span>Change color: </span>
      <Palets  @change-color="changeColor" @default-color="defaultColor"/>
    </div>
    <div class="mt-5 canvas d-inline-block" :style="{backgroundColor:currentColor}" @mousemove="coordinates">({{corX}},{{corY}})</div>
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
      currentColor: 'aquamarine'
    }
  },
  methods: {
    coordinates(event) {
      this.corX = event.offsetX;
      this.corY = event.offsetY;
    },
    changeColor(color) {
        this.currentColor = color;
    },
    defaultColor() {
        this.currentColor = 'aquamarine';
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
  }
  
</style>
