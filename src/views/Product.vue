<template>
	<div class="home">
		<ProductInfo> </ProductInfo>
	</div>
</template>
<script>
    // @ is an alias to /src
    import ProductInfo from '@/components/productInfo/ProductInfo.vue'

    export default {
        name: 'product',
        components: {
            ProductInfo
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
<style scoped lang="scss">
	.home {
		padding-top: 90px;
	}
</style>
