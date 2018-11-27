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
        initialProducts: [],
        products: [],
        searchTerm: 'ttt1',
        snapshot: [],
      }
    },
    components: {
      ProductsList,
      SearchInput,
    },
    methods: {
      onSearch: function (val) {
        const regex = new RegExp(`${val}`, 'g')
        this.products = this.initialProducts.filter((product) => {
          return (product.title.search(regex) > -1)
        });
      }
    },
    mounted: function () {
      client.product.fetchAll()
      .then((products) => {
        console.log(products);
        this.initialProducts = products;
        this.products = products;
      });
    }
  }
</script>
