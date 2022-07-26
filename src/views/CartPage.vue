<template>
  <div>
    <v-cart :cart_data="CART" />
  </div>
</template>
<script>
import vCart from '@/components/v-cart/v-cart';
import { mapGetters } from 'vuex';
export default {
  components: {
    vCart
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  }
}
</script>
<style lang="">
  
</style>