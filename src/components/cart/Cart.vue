<template>
    <div class="hello">
        <table class="cart-table">
            <tr>
                <th>Title</th>
                <th>Id</th>
                <th>Created At</th>
                <th>Tags</th>
                <th>Vendor</th>
                <th>Description</th>
            </tr>
            <tr v-for="item in productsInCart">

            </tr>
        </table>
    </div>
</template>

<script>
    import {client} from '../../services/shopify-client';

    export default {
        name: 'Cart',
        props: {
            msg: String
        },
        data: function () {
            return {productsInCart: this.$store.getters.inCart};
        },
        mounted: function () {
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

        td, th {
            border: 1px solid #ddd;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: cornflowerblue;
            color: white;
        }


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