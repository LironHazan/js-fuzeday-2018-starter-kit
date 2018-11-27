<template>
    <div class="hello">
        <v-data-table
                :headers="headers"
                :items="productsInCart"
                class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.title }}</td>
                <td class="text-xs-right">{{ props.item.id }}</td>
                <td class="text-xs-right">{{ props.item.vendor }}</td>
                <td class="text-xs-right" @click="removeItem(item.id)">X</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>

    export default {
        name: 'Cart',
        props: {
            msg: String
        },
        data: function () {
            return {
                productsInCart: this.$store.getters.inCart,
                headers: [
                    {
                        text: 'Title',
                        value: 'title'
                    },
                    {
                        text: 'ID',
                        value: 'id'
                    },
                    {
                        text: 'Vendor',
                        value: 'vendor'
                    },
                    {
                        text: 'Remove Item',
                        value: 'removeItem'
                    }
                ]
            };
        },
        mounted: function () {
        },
        methods: {
            removeItem: function (id) {
                this.$store.dispatch('removeCartItem', id);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .cart-table {
        margin: auto;
        width: 90%;
        border: 1px solid black;
        cursor: pointer;
    }

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }
</style>