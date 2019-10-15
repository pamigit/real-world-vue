<template>
  <div id="app">
    <div class="d-flex" id="wrapper" :class="{'toggled': isActive}">
      <Sidebar />
      <div id="page-content-wrapper">
        <Tabs @toggle-sidebar="toggleSidebar"/>
        <router-view @go-to-detail="goToDetail" :products="products" :profiles="profiles"/>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "./components/Tabs";
import Sidebar from "./components/Sidebar";
import axios from "axios";
export default {
  components: {
    Tabs,
    Sidebar
  },
  data() {
    return {
      isActive: false,
      products: [],
      profiles: []
    }
  },
  created() {
      axios.get('https://jsonplaceholder.typicode.com/photos?_limit=12')
        .then(res => this.products = res.data)
        .catch(err => console.log(err));
      axios.get('https://reqres.in/api/users?page=2')
        .then(res => this.profiles = res.data.data, )
        .catch(err => console.log(err));
  },
  methods: {
    toggleSidebar() {
        this.isActive = !this.isActive;
    },
    goToDetail(item) {
      
      item.url = item.url.replace("600", "400");
      
      this.$router.push({
        name: 'overview',
        params: {
          Pid: item.id
        }
      });
    }
  }
}
</script>

<style>
  body {
    overflow-x: auto;
  }

  #sidebar-wrapper {
    min-height: 100vh;
    margin-left: -15rem;
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;   
    -o-transition: margin .25s ease-out;
    transition: margin .25s ease-out;
  }

  #sidebar-wrapper .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
  }

  #sidebar-wrapper .list-group {
    width: 15rem;
  }

  #page-content-wrapper {
    min-width: 100vw;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: 0;
  }

  @media (min-width: 768px) {
    #sidebar-wrapper {
      margin-left: 0;
    }

    #page-content-wrapper {
      min-width: 0;
      width: 100%;
    }

    #wrapper.toggled #sidebar-wrapper {
      margin-left: -15rem;
    }
  }
</style>
