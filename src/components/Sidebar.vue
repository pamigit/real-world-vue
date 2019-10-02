<template>
    <div class="bg-light border-right" id="sidebar-wrapper">
        <router-link to="/" style="text-decoration:none"><div class="sidebar-heading">Start Bootstrap </div></router-link>
        <div class="list-group list-group-flush">
            <router-link to="/dashboard" class="list-group-item list-group-item-action bg-light">Dashboard</router-link>
            <router-link to="/shortcuts" class="list-group-item list-group-item-action bg-light">Shortcuts</router-link>
            <router-link to="/events" class="list-group-item list-group-item-action bg-light">Events</router-link>
            <router-link to="/profile" class="list-group-item list-group-item-action bg-light">Profile</router-link>
            <router-link to="/status" class="list-group-item list-group-item-action bg-light">Status</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar"
}
</script>