<template>
    <div class="container-fluid text-center">
        <div class="col-md-12" v-for="product in products" :key="product.id">
            <div v-if="proId == product.id">
                <h1 class="mt-4">{{product.title}}</h1>
                <img :src="product.url" class="img-fluid">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'overview',
    data() {
        return {
            proId: this.$route.params.Pid
        }
    },
    props: ['products']
}
</script>