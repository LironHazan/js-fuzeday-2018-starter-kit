<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<ul>
			<li v-for="product in products">
				<Product :product="product"></Product>
			</li>
		</ul>
	</div>
</template>

<script>
import { client } from '../../services/shopify-client';
import Product from './Product.vue'

	export default {
        name: 'ProductsList',
        props: {
            msg: String
        },
        components: {
            Product
        },
        data: function () {
            return { products: [] };
        },
        mounted: function () {
            client.product.fetchAll()
                .then((products) => {
                    console.log(products)
                    this.products = products;
                });
        }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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