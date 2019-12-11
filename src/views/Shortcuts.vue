<template>
    <div class="container-fluid">
        <h1 class="mt-4 mr-2" @click="show = !show">Shortcuts</h1>
        <span><sup>*</sup>Click on title for animation!</span>
        <transition enter-active-class="animated infinite zoomIn" leave-active-class="animated infinite fadeOutUpBig slower">
            <img v-if="show" src="../assets/img1.jpg" />
        </transition>
    </div>
</template>
<script>
    export default {
        name: "Shortcuts",
        data() {
            return {
                show: false
            }
        }
    }
</script>
<style scoped>
    img {
        width: 100%;
        height: 100%;
    }
    h1 {
        cursor: pointer;
        display:inline-block;
    }

    
</style>