<template>
  <header class="header">
    <nav class="site-header sticky-top">
      <div class="container d-flex flex-column flex-md-row justify-content-center">
        <a href="#" @click.prevent="$emit('clickCo')" class="sidebar-co">
          Сайдбар
        </a>
        <a class="d-block" href="#">Главная</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
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

</style>
