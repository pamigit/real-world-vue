<template>
    <div class="container-fluid">
        <h1 class="mt-4 text-center">Profiles</h1>
        <section class="container mt-4 mb-4">
            <Profile :profiles="profiles"/>
        </section>
    </div>
</template>

<script>
import Profile from '../components/Profile';

export default {
    name: 'Profiles',
    components: {
        Profile
    },
    props: ['profiles']
}
</script>