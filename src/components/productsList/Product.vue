<template>
    <ProductCard
        :id="product.id"
        :title="product.title"
        :image="image"
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
            }
        }
    }
</script>