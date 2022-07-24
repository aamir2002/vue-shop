<template>
  <div class="v-catalog"> 
    <h3 class="mb-4 display-6">Каталог</h3>
    <div class="v-catalog--list row">
      <v-catalog-item
        class="col-xl-2 col-lg-4 col-md-6" 
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from '@/components/v-catalog-item';
import {mapActions, mapGetters} from 'vuex'

export default {

  name: 'v-catalog',
  components: {
    vCatalogItem
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
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

<style lang="scss" scoped>
  .v-catalog {
    margin-top: 20px;
    margin-left: 70px;
    h3 {
      font-size: 30px;
    }
  }
</style>