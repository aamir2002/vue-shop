<template>
  <div class="v-cart">
    <router-link to="/">
      <div class="v-catalog__btn">Назад в каталог</div>
    </router-link>
    <h3 class="mb-4 display-6">Корзина</h3>
    <p v-if="!cart_data.length">Корзина пустая!</p>
    <v-cart-item v-for="(item, index) in cart_data" :key="item.article" :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)" />
  </div>
</template>

<script>
import vCartItem from './v-cart-item'
import { mapActions } from 'vuex'

export default {

  name: 'v-cart',
  components: {
    vCartItem
  },
  data() {
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
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-cart {
  margin-left: 70px;

  h3 {
    font-size: 30px;
  }
  p {
    font-size: 20px;
  }
  a {
    color: black;
  }
}
</style>