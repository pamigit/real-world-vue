<template>
  <div class="container-fluid">
    <h1 class="mt-4 text-center">Simple Sidebar</h1>
    <div class="row mt-4">
      <div class="col-md-4 col-lg-4 text-center" v-for="product in products" :key="product.id">
         <img :src="product.thumbnailUrl" class="img-fluid">
         <h5 @click="$emit('go-to-detail', product.id)">{{product.title}}</h5>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "home",
  data() {
    return {
      
    }
  },
  props: ['products']
};
</script>
