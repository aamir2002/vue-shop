<template>
  <div class="v-cart-item">
    <img :src="cart_item_data.image" alt="">
    <div class="v-cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
  </div>
  <div class="v-cart-item__quantity"></div>
  <button>Delete</button>
</template>
<script>
export default {
  props: {
    cart_item_data: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style lang="scss">
  
</style>