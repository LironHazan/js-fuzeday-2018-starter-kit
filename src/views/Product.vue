<template>
    <div class="home">
        <ProductInfo :product="product" />
    </div>
</template>
<script>
  // @ is an alias to /src
  import ProductInfo from '@/components/productInfo/ProductInfo.vue'

  export default {
    name: 'product',
    props: [ 'product' ],
    components: {
      ProductInfo
    },
  }
</script>
<style scoped lang="scss">
    .home {
        padding-top: 90px;
    }
</style>
