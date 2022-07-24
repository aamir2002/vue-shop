<template>
  <v-sidebar/>
  <main class="main">
    <router-view />
  </main>
</template>

<script>

import vSidebar from "@/components/v-sidebar";

export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  components: {
    vSidebar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
@import "@/assets/styles/style.scss";

#app {
  font-family: 'Roboto', sans-serif;
}

.main {
  margin-left: 250px;
  overflow-y: hidden;
}

</style>