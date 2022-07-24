<template>
  
  <v-sidebar :isOpen="isOpen"/>
  <v-header @clickCo="isOpen = !isOpen"/>
  <main class="main" :class="{noMargin: !isOpen}">
    <router-view /> 
  </main>
</template>

<script>

import vSidebar from "@/components/v-sidebar";
import vHeader from "./components/v-header.vue";

export default {
  name: 'App',
  data: () => ({
    isOpen: true
  }),
  components: {
    vSidebar, vHeader
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
@import '@/assets/styles/style.scss';

#app {
  font-family: 'Roboto', sans-serif;
}

.main {
  margin-left: 250px;
  overflow-x: hidden;
  transition: .4s ease-in-out;
  padding-top: 70px;
}

.noMargin {
  margin: 0;
}
</style>