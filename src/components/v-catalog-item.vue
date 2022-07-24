<template>
  <div class="v-catalog-item">
    <img :src="product_data.image" class="" alt="">
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">Price: {{product_data.price}}&#36;</p>
    <button 
    class="btn btn-primary" 
    @click="sendDataToParent">Add to cart
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
    sendDataToParent() {
      this.$emit('sendArticle', this.product_data.article)
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-catalog-item {
    box-shadow: 1px 1px 15px var(--bs-gray-300);
    padding: 35px 20px;
    margin-bottom: 30px;
    margin-left: 30px;
    &__name {
      font-size: 20px;
      padding-top: 15px;
    }
    img {
      width: 100%;
      height: 230px;
      object-fit: cover;
    }
  }
</style>