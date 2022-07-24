<template>
	<div class="v-main-wrapper">
		<v-catalog />
		<v-cart 
      v-if="CART.length"
      :cart_data="CART"
    />
	</div>
</template>

<script>
import vCart from '@/components/v-cart';
import vCatalog from './v-catalog.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'v-main-wrapper',
  data () {
    return {
    }
  },
  components: {
  	vCart, vCatalog
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  }
}
</script>

<style lang="scss" scoped>
  
</style>