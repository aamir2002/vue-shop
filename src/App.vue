<template>
  
  <v-sidebar :isOpen="isOpen"/>
  <v-header @clickCo="isOpen = !isOpen"/>
  <main class="main" :class="{noMargin: !isOpen}">
    <keep-alive><router-view /></keep-alive>
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

html {
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}

.main {
  margin-left: 250px;
  overflow-x: hidden;
  transition: .4s ease-in-out;
  padding-top: 15px;
}

.noMargin {
  margin: 0;
}
</style>