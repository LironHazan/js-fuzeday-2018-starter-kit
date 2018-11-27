<template>
    <v-card :hover="true" height="100%">
        <v-img :src="image.src" />

        <div class="product-price-range">
            {{ (priceRange[0] === priceRange[1])
                ? `$${priceRange[0]}`
                : `$${priceRange[0]} - $${priceRange[1]}`}}
        </div>
        
        <v-card-title primary-title>
            <div>
                <h3 class="card-title mb-0">{{ title }}</h3>
            </div>
        </v-card-title>
        
        <v-card-actions>
            <v-btn flat icon color="indigo" @click="addItem(1)">
                <v-icon>add</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "ProductCard",
        props: {
            id: String,
            title: String,
            image: Object,
            priceRange: Array,
        },
        data: function() {
            return {
                expanded: false,
            };
        },
        methods: {
            addItem: function(quantity = 1) {
                this.$emit('add-item', {itemId: this.id, quantity});
            }
        }
    }
</script>

<style>
    .card-title {
        font-size: 20px;
        line-height: 28px;
        word-break: break-word;
    }

    .product-price-range {
        font-size: 22px;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 1em;
    }
</style>

