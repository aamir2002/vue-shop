<template>
  <div class="v-catalog"> 
    <router-link to="/cart">
      <div class="v-catalog__btn">Корзина: {{CART.length}}</div>
    </router-link>
    <h3 class="mb-4 display-6">Каталог</h3>
    <div class="v-catalog--list row">
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item';
import {mapActions, mapGetters} from 'vuex'

export default {

  name: 'v-catalog',
  components: {
    vCatalogItem
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },
  methods: {
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log('Data arrived!');
        }
      })
  }
}
</script>

<style lang="scss">
  .v-catalog {
    margin-top: 20px;
    margin-left: 70px;
    h3 {
      font-size: 30px;
    }
    &__btn {
      position: absolute;
      left: 80%;
      bottom: 86%;
      display: inline-block;
      padding: 15px 20px;
      border: 1px solid rgba(0, 0, 0, 0.166);
      border-radius: 5px;
      transition: .2s;
      font-size: 20px;
      &:hover {
        background-color: black;
        color: white;
      }
    }
    a {
      color: black;
    }
  }
</style>