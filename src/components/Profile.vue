<template>
    <div class="row mb-3">
        <div class="col-md-6" v-for="profile in profiles" :key="profile.id">
            <div class="d-flex flex-row border rounded">
                <div class="p-0 w-25">
                    <img :src="profile.avatar" class="img-thumbnail border-0" />
                </div>
                <div class="pl-3 pt-2 pr-2 pb-2 w-75 border-left">
                    <h4 class="text-primary">{{profile.first_name | uppercase}} {{profile.last_name | uppercase}}</h4>
                    <h5 class="text-info text-truncate">{{profile.email}}</h5>
                    <ul class="m-0 float-left" style="list-style: none; margin:0; padding: 0">
                        <li><i class="fab fa-facebook-square"></i> Facebook</li>
                        <li><i class="fab fa-twitter-square"></i> Twitter</li>
                    </ul>
                    <p class="text-right m-0">
                        <router-link :to="'/editprofile/'+profile.id" class="btn btn-primary"><i class="far fa-user"></i> Edit Profile</router-link>
                    </p>
                </div>
            </div>
        </div> 
    </div>          
</template>

<script>
export default {
    name: 'profiles',
    props: ['profiles'],
    filters: {
        uppercase: function(value) {
            return value.toUpperCase();
        }
    }
}
</script>