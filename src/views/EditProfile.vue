<template>
  <div>
    <Modal :isOpen="showModal" @handleNo="closeModal" @handleYes="updateProfile"></Modal>
    <div class="col-md-9">
        <div class="card mt-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <h4>Edit Profile</h4>
                        <hr>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <form>
                            <div class="form-group row">
                                <label for="username" class="col-4 col-form-label">User Name*</label> 
                                <div class="col-8">
                                    <input v-model="profile.first_name" id="username" name="username" required="required" placeholder="Username" class="form-control here" type="text">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="name" class="col-4 col-form-label">First Name</label> 
                                <div class="col-8">
                                    <input v-model="profile.first_name" id="name" name="name" placeholder="First Name" required="required" class="form-control here" type="text">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="lastname" class="col-4 col-form-label">Last Name</label> 
                                <div class="col-8">
                                    <input v-model="profile.last_name" id="lastname" name="lastname" required="required" placeholder="Last Name" class="form-control here" type="text">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="text" class="col-4 col-form-label">Nick Name</label> 
                                <div class="col-8">
                                    <input id="text" name="text" placeholder="Nick Name" class="form-control here" type="text">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="select" class="col-4 col-form-label">Display Name public as</label> 
                                <div class="col-8">
                                    <select id="select" name="select" class="custom-select">
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="email" class="col-4 col-form-label">Email*</label> 
                                <div class="col-8">
                                    <input v-model="profile.email" id="email" name="email" placeholder="Email" class="form-control here" required="required" type="text">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="website" class="col-4 col-form-label">Website</label> 
                                <div class="col-8">
                                    <input id="website" name="website" placeholder="website" class="form-control here" type="text">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="publicinfo" class="col-4 col-form-label">Public Info</label> 
                                <div class="col-8">
                                    <textarea id="publicinfo" name="publicinfo" cols="40" rows="4" class="form-control"></textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="newpass" class="col-4 col-form-label">New Password</label> 
                                <div class="col-8">
                                    <input id="newpass" name="newpass" placeholder="New Password" class="form-control here" type="text">
                                </div>
                            </div> 
                            <div class="form-group row">
                                <div class="offset-4 col-8">
                                    <button @click="askToUpdate(profile)" type="button" class="btn btn-primary">Update My Profile</button>
                                    <button type="button" class="btn btn-warning ml-3" @click="cancelEdit">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     </div>
  </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import {cloneDeep} from 'lodash';
    import Modal from '../components/Modal'

    export default {
        name: 'editprofile',
        data() {
            return {
                proId: this.$route.params.profileId,
                profile: {},
                showModal: false,
                profileToUpdate: null,
            }
        },
        components: {
            Modal,
        },
        created () {
            this.profile = cloneDeep(this.getProfileById(this.proId));
        },
        computed: {
            ...mapGetters(['getProfileById'])
        },
        methods: {
            ...mapActions(['updateProfileAction']),
            cancelEdit() {
                this.$router.push({ name: 'profiles' });
            },
            askToUpdate(profile) {
                this.profileToUpdate = profile;
                this.showModal = true;
            },
            closeModal() {
                this.showModal = false;
            },
            async updateProfile() {
                this.closeModal();
                if (this.profileToUpdate) {
                    await this.updateProfileAction(this.profileToUpdate);
                }
                this.$router.push({ name: 'profiles' });
            }
        },
    }
</script>

<style scoped>

</style>