<template>
    <div>
        <div class="palete" @onmouseover="$emit('change-color')"></div>
    </div>
</template>

<script>
export default {
    name: "Palete",
    props: ["palete"]
}
</script>

<style scoped>
    .palete {
        width: 25px;
        height: 25px;
        display: inline-block;
    }
</style>