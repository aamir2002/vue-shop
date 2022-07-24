<template>
	<div class="v-main-wrapper">
		<v-catalog />
		<v-cart />
	</div>
</template>

<script>
import vCart from '@/components/v-cart';
import vCatalog from './v-catalog.vue';

export default {
  name: 'v-main-wrapper',
  data () {
    return {
    }
  },
  components: {
  	vCart, vCatalog
  }
}
</script>

<style lang="scss" scoped>

</style>