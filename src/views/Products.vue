<template>
  <div class="home">
    <ProductsList msg="Products Main"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductsList from '@/components/productsList/ProductsList.vue'

export default {
  name: 'products',
  components: {
      ProductsList
  }
}
</script>
