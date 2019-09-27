<template>
    <div class="bg-light border-right" id="sidebar-wrapper">
        <router-link to="/"><div class="sidebar-heading">Start Bootstrap </div></router-link>
        <div class="list-group list-group-flush">
            <router-link to="/dashboard" class="list-group-item list-group-item-action bg-light">Dashboard</router-link>
            <a href="#" class="list-group-item list-group-item-action bg-light">Shortcuts</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Overview</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Events</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Profile</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Status</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar"
}
</script>