<template>
  <div class="home">
    <SearchInput />
    <ProductsList msg="Products Main"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductsList from '@/components/productsList/ProductsList.vue'
import SearchInput from '@/components/SearchInput.vue'

export default {
  name: 'products',
  data: {
    searchTerm: 'ttt1'
  },
  components: {
      ProductsList,
    SearchInput,
  }
}
</script>
