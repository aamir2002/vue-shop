<template>
	<div class="v-main-wrapper">
		<v-catalog />
	</div>
</template>

<script>

import vCatalog from './v-catalog/v-catalog'

export default {
  name: 'v-main-wrapper',
  data () {
    return {
    }
  },
  components: {
  	vCatalog
  },
  
}
</script>

<style lang="scss" scoped>
  .v-main-wrapper {
    max-width: 1500px;
  }
</style>