<template>
  <div class="container-fluid">
    <h1 class="mt-4 text-center">Simple Sidebar</h1>
    <div class="row mt-4">
      <div class="col-md-4 col-lg-4 text-center" v-for="product in products" :key="product.id">
         <img @click="$emit('go-to-detail', product)" :src="product.thumbnailUrl" class="img-fluid">
         <h5>{{product.title}}</h5>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "home",
  props: ['products']
};
</script>

<style scoped>
  img {
    cursor: pointer;
  }
</style>