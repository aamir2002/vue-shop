<template>
  <div class="v-cart">
    <h3 class="mb-4 display-6">Корзина</h3>
    <v-cart-item 
      v-for="item in cart_data"
      :key="item.article"
      :cart_item_data="item"
    />
  </div>
</template>

<script>
import vCartItem from './v-cart-item'

export default {

  name: 'v-cart',
  component: {
    vCartItem
  },  
  data () {
    return {
      
    }
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>