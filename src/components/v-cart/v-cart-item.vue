<template>
  <div class="v-cart-item">
    <img :src="cart_item_data.image" alt="">
    <div class="v-cart-item__info">
      <p class="v-cart-item__name">{{cart_item_data.name}}</p>
      <p class="v-cart-item__price">Цена: {{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>     
    </div>
    <div class="v-cart-item__quantity d-flex">
      <p class="pe-1">Количество:</p>
      {{cart_item_data.quantity}}
    </div>
    <button class="btn btn-danger" @click="deleteFromCart">Delete</button>
  </div>
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
  },
  computed: {},
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    }
  }
}
</script>
<style lang="scss" scoped>
  .v-cart-item {
    box-shadow: 1px 1px 15px var(--bs-gray-300);
    padding: 20px 20px;
    margin-bottom: 30px;
    margin-left: 30px;
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 60%;
    img {
      width: 150px;
      object-fit: cover;
      height: 150px;
    }
    &__name {
      font-size: 20px;
    }
    &__price {
      color: var(--bs-gray-600);
    }
  }
</style>