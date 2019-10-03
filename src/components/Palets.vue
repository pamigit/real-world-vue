<template>
    <div>
        <Palete v-for="palete in palets" :key="palete.id" @change-color="$emit('change-color', palete.color)" :style="{backgroundColor:palete.color}" :palete="palete"/>
    </div>
</template>

<script>
import Palete from "./Palete"
export default {
    name: 'Palets',
    components: {
        Palete
    },
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

