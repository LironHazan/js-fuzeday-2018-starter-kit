<template>
    <div class="home">
        <SearchInput v-on:search="onSearch"/>
        <ProductsList :products="products"/>
        <Spinner v-if="isFetching"/>
    </div>
</template>

<script>
  // @ is an alias to /src
  import ProductsList from '@/components/productsList/ProductsList.vue'
  import SearchInput from '@/components/SearchInput.vue'
  import Spinner from '@/components/Spinner.vue'
  import { client } from '../services/shopify-client';

  export default {
    name: 'products',
    data: function () {
      return {
        initialProducts: [],
        products: [],
        searchTerm: 'ttt1',
        snapshot: [],
        isFetching: false,
      }
    },
    components: {
      ProductsList,
      SearchInput,
      Spinner,
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
      this.isFetching = true;
      client.product.fetchAll()
      .then((products) => {
        console.log(products);
        this.initialProducts = products;
        this.products = products;
        this.isFetching = false;
      }).catch(err => {
        console.log(err);
        this.isFetching = false;
      });
    }
  }
</script>
