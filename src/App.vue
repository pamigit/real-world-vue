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
import { myLifeCycleHooks } from "./mymix";
import {mapActions, mapState} from "vuex";

export default {
  components: {
    Tabs,
    Sidebar
  },
  data() {
    return {
      isActive: false
    }
  },
  async created() {
    await this.getProductsAction();
    await this.getProfilesAction();
    console.log('hello from component!!!');
  },
  methods: {
    ...mapActions(['getProductsAction','getProfilesAction']),
    
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
  },
  mixins: [myLifeCycleHooks],
  computed: {
    ...mapState(['products','profiles'])
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
