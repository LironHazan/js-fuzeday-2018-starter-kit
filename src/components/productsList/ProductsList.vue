<template>
	<div>
		<v-container>
			<v-layout align-start>
				<h1>Products List </h1>
			</v-layout>
			<v-layout align-center>
				<v-container fluid grid-list-lg>
					<v-layout row wrap>
						<v-flex v-for="product in products" xs12 sm6 md3 class="product-box">
							<Product :product="product" @add-item="addToCart"/>
						</v-flex>
					</v-layout>
				</v-container>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import Product from './Product.vue'

	export default {
        name: 'ProductsList',
        props: {
			products: Array,
        },
        components: {
            Product
		},
		methods: {
			addToCart: function(itemData) {
				this.$store.dispatch('addToCart', itemData);
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	h3 {
		margin: 40px 0 0;
	}
</style>