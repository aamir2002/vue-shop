<template>
  <div class="v-catalog-item">
    <img :src="product_data.image" class="" alt="">
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">Цена: {{product_data.price}}&#36;</p>
    <button 
    class="btn btn-primary" 
    @click="addToCart">Add to cart
    </button>
  </div>

</template>
<script>
export default {

  name: 'v-catalog-item',

  data () {
    return {}
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
   addToCart() {
    this.$emit('addToCart', this.product_data)
   }
  },
  mounted() {
    this.product_data['quantity'] = 1
  },
}
</script>

<style lang="scss" scoped>
  .v-catalog-item {
    box-shadow: 1px 1px 15px var(--bs-gray-300);
    padding: 35px 20px;
    margin-bottom: 30px;
    margin-left: 30px;
    border-radius: 7px;
    &__name {
      font-size: 20px;
      padding-top: 15px;
    }
    img {
      width: 100%;
      height: 230px;
      object-fit: cover;
    }
    @media (min-width: 1600px) and (max-width: 3000px) {
      flex: 0 0 auto;
      width: 20%;
    }
    @media (min-width: 1200px) and (max-width: 1600px) {
      flex: 0 0 auto;
      width: 33%;
    }
    @media (min-width: 500px) and (max-width: 1200px) {
      width: 50%;
    }
  }
</style>