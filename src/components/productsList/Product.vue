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
                priceRange: this.product.variants.reduce((acc, variant) => {
                        if (acc.length === 0) {
                            return [variant.price, variant.price];
                        }
                        return [Math.min(acc[0], variant.price), Math.max(acc[1], variant.price)];
                    }, []),
            }
        },
        methods: {
            addToCart: function(itemData) {
                this.$store.dispatch('addToCart', {product: this.product, quantity: itemData.quantity});
            }
        }
    }
</script>