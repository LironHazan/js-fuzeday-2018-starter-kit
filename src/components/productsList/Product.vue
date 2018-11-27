<template>
    <ProductCard
        :id="product.id"
        :title="product.title"
        :image="image"
        :priceRange="priceRange"
        @add-item="addToCart"
    />
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
                this.$store.dispatch('addToCart', {
                    product: this.product,
                    quantity: {
                        [this.product.variants[0].id]: itemData.quantity,
                    }
                });
            }
        }
    }
</script>