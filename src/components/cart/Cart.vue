<template>
    <div class="hello">
        <v-data-table
                :headers="headers"
                :items="$store.getters.inCart"
                class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td class="text-xs-right">{{ props.item.product.id }}</td>
                <td class="text-xs-right">{{ props.item.product.title }}</td>
                <td class="text-xs-right">{{ props.item.quantity }}</td>
                <td class="text-xs-right remove-item" @click="removeItem(props.item.product.id)">X</td>
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
                headers: [
                    {
                        text: 'ID',
                        value: 'id'
                    },
                    {
                        text: 'Title',
                        value: 'title'
                    },
                    {
                        text: 'Quantity',
                        value: 'quantity'
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
                console.log('remove item id: ', id)
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

    .remove-item {
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