<template>
  <header class="header">
    <nav>
      <a href="#" @click.prevent="$emit('clickCo')" class="sidebar-co">
        <i class="bi bi-list"></i>
      </a>
    </nav>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss">
.header {
  position: fixed;
  left: 0;
  z-index: 100;
  width: 100%;
  color: #fff!important;
  background-color: rgb(159, 53, 53);
  height: 60px;
  padding-left: 250px;
  box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.386);
  display: flex;
  align-items: center;
}
.sidebar-co {
  i {
    color: white;
    font-size: 35px;
  }
}
</style>
