<template>
  <div class="container-fluid text-center">
    <h1 class="mt-4">Canvas</h1>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <button class="btn btn-outline-info" type="button" @click="expandCanvas">Expand canvas</button>
      </div>
      <input type="text" class="form-control" v-model="resolution" placeholder="Add resolution for expanding canvas..." aria-label="" aria-describedby="basic-addon1">
      <div class="input-group-append">
        <span class="input-group-text">px</span>
      </div>
    </div>

    <div class="d-block text-left mt-3">
      <span>Change background color: </span>
      <Palets  @change-color="changeColor" @default-color="defaultColor"/>
    </div>
    <div class="mt-5 canvas d-inline-block" :style="compStyle" @mousemove="coordinates">({{corX}},{{corY}})</div>
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
      currentColor: 'aquamarine',
      resolution: '300',
      resolutionStyle: ''
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
    },
    expandCanvas() {
        this.resolutionStyle = this.resolution;
    }
  },
  computed: {
    compStyle() {
      return {
        backgroundColor: this.currentColor,
        width: this.resolutionStyle+'px',
        height: this.resolutionStyle+'px'
      }
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
  }
  
</style>
