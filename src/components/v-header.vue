<template>
  <header class="header">
    <nav class="site-header sticky-top">
      <div class="container d-flex flex-column flex-md-row justify-content-center">
        <a href="#" @click.prevent="$emit('clickCo')" class="sidebar-co">
          <i class="bi bi-list"></i>
          Sidebar
        </a>
        <a 
          class="d-block" 
          v-for="link in links"
          :key="link.path"
          @click="$router.push(link.path)"
          style="cursor: pointer;"
          :class="{'active': $route.path === link.path}"
        >{{link.name}}</a>
      </div>
    </nav>
    <div>
     
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      links: []
    }
  },
  methods: {
   
  },
  mounted() { 
    this.links = this.$router.getRoutes()
  },
};

</script>

<style lang="scss" scoped>
.header {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.088);
  width: 100%;
  a {
    text-decoration: none;
    padding: 20px;
    font-size: 16px;
    text-transform: uppercase;
    color: black;
    transition: .3s ease;

    &:hover {
      background-color: black;
      color: white;
    }
  }
}
.active {
  background-color: black;
  color: white!important;
}
</style>
