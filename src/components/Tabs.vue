<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button class="btn btn-primary" id="menu-toggle" @click="$emit('toggle-sidebar')">Toggle Menu</button>

        <button @click="expandedNav" class="navbar-toggler" :class="{'collapsed': !expanded}" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" :aria-expanded="expanded" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" :class="{'show': expanded}" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li @click="openDropdown" class="nav-item dropdown" :class="{'show': shown}">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="shown">
                        Dropdown
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" :class="{'show': shown}" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Tabs",
    data() {
        return {
            shown: false,
            expanded: false
        }
    },
    methods: {
        openDropdown() {
            this.shown = !this.shown;
        },
        expandedNav() {
            this.expanded = !this.expanded;
        }
    }
}
</script>
