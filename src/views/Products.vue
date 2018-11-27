<template>
    <div class="home">
        <SearchInput v-on:search="onSearch"/>
        <ProductsList :products="products"/>
    </div>
</template>

<script>
  // @ is an alias to /src
  import ProductsList from '@/components/productsList/ProductsList.vue'
  import SearchInput from '@/components/SearchInput.vue'
  import { client } from '../services/shopify-client';

  export default {
    name: 'products',
    data: function () {
      return {
        products: [],
        searchTerm: 'ttt1',
      }
    },
    components: {
      ProductsList,
      SearchInput,
    },
    methods: {
      onSearch: function (val) {
        console.log('in products: ', val)
      }
    },
    mounted: function () {
      client.product.fetchAll()
      .then((products) => {
        console.log(products)
        this.products = products;
      });
    }
  }
</script>
