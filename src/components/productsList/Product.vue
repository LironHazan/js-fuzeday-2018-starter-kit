<template>
    <ProductCard
        :id="product.id"
        :title="product.title"
        :image="image"
        @add-item="addItem"
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
        },
        methods: {
            addItem: function(itemData) {
                this.$emit('add-item', itemData);
            },
        }
    }
</script>