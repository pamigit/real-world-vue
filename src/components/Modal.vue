<template>
    <div id="modal" class="modal fade" :class="{'show': isOpen }">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Confirm Update Profile</h5>
            </div>
            <div class="modal-body">
                Are you sure to want change user?
            </div>
            <div class="modal-footer">
                <button @click="onYes" type="button" class="btn btn-primary">Yes</button>
                <button @click="onNo" type="button" class="btn btn-secondary">No</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        props: {
            isOpen: {
                type: Boolean,
                default: () => false,
            },
        },
        methods: {
            onNo() {
                this.$emit('handleNo');
            },
            onYes() {
                this.$emit('handleYes');
            },
        },
    }
</script>

<style scoped>
.show {
    display: block;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
}
</style>