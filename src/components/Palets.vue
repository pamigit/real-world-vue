<template>
    <span>
        <div v-for="palete in palets" :key="palete.id" @mouseover="$emit('change-color', palete.color)" @mouseout="$emit('default-color')" :style="{backgroundColor:palete.color}" class="palete ml-3"></div>
    </span>
</template>

<script>
export default {
    name: 'Palets',
    data() {
        return {
            palets: [
                {
                    id: 1,
                    color: 'brown'
                },
                {
                    id: 2,
                    color: 'orange'
                },
                {
                    id:3,
                    color: 'pink'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .palete {
        width: 25px;
        height: 25px;
        display: inline-block;
    }
</style>