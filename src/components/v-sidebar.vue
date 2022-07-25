<template>
  <div class="sidebar">
    <div class="d-flex flex-column flex-shrink-0 text-bg-dark sidebar-body" :class="{open: isOpen}">
      
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
  props: ['isOpen']
}
</script>

<style lang="scss" scoped>

	.sidebar-body {
		top: 0;
		left: 0;
		overflow-x: hidden;
		height: 100%;
		z-index: 1;
		width: 0;
    transition: .4s ease-out;
    position: fixed;
    padding-top: 70px;
	}

  .nav {
    margin-top: 20px!important;
  }
 
  .nav-link:hover {
    color: var(--bs-nav-pills-link-active-color);
    background-color: var(--bs-nav-pills-link-active-bg);
  }

  .open {
    width: 250px;
  }
</style>