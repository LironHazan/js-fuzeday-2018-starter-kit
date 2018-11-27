<template>
	<div class="product">
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
        }
    }
</script>
