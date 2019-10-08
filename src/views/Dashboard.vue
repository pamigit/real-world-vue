<template>
  <div class="container-fluid text-center">
    <h1 class="mt-4">Canvas</h1>

    <div class="col col-lg-6 mt-4">
      <div class="input-group">
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
      currentColor: 'brown',
      baseColor: 'brown',
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
      this.baseColor = color;
      this.currentColor = this.baseColor;
    },
    defaultColor() {
      this.currentColor = this.baseColor;
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
    color: black;
    font-weight: bold;
  }
  
</style>
