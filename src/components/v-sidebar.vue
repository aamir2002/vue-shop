<template>
	<div class="d-flex flex-column flex-shrink-0 text-bg-dark sidebar">
    <div class="sidebar-logo">
      <i class="bi bi-building"></i>
      <span class="">Logo</span>
      <a href="" @click.prevent="$emit('click', sidebarClose)"><i class="bi bi-x-lg"></i></a>
    </div>

    <hr style="opacity: .12;">
    <ul class="nav nav-pills flex-column mb-auto">
      <li
        v-for="link in links"
        :key="link.url"
        @click="$router.push(link.url)"
      >
        <a 
          class="nav-link" 
          style="color: white; cursor: pointer;"
          :class="{'active': $route.path === link.url}"  
        >{{link.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  name: 'v-sidebar',

  data: () => ({
    links: [
      {title: 'Home', url: '/'},
      {title: 'About', url: '/about'},
    ]
  }),
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		overflow-x: hidden;
		height: 100%;
		z-index: 1;
		width: 250px;
    &-logo {
      padding-left: 15px;
      padding-top: 15px;
      i {
        font-size: 40px;
        padding-right: 15px;
      }
      span {
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
      }
    } 
	}
  .nav-link:hover {
    color: var(--bs-nav-pills-link-active-color);
    background-color: var(--bs-nav-pills-link-active-bg);
  }
</style>