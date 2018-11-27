<template>
<div class="product" @click="goToProduct">
    <ProductCard
        class="product"
        :id="product.id"
        :title="product.title"
        :image="image"
        :priceRange="priceRange"
        @add-item="addToCart"
    />
</div>
</template>
<script>
    import ProductCard from '@/components/sharable/ProductCard.vue';
    import {getProductPriceRange} from '@/utils/product.utils';

    export default {
        name: "Product",
        components: {
            ProductCard,
        },
        props: {
            product: Object
        },
        data: function() {
            return {
                image: {
                    src: this.product.images && this.product.images[0].src,
                },
                priceRange: getProductPriceRange(this.product),
            }
        },
        methods: {
            addToCart: function(itemData) {
                this.$store.dispatch('addToCart', {product: this.product, quantity: itemData.quantity});
            },
           goToProduct: function() {
			this.$router.push({path: `/product/${id}` });
		    }
        }
    }
</script>
<style scoped lang="scss">
	.product {
		height: 100%;
        display: flex;
        flex-direction: column;
	}
</style>