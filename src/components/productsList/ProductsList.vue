<template>
	<div>
		<v-container>
			<v-layout align-start>
			</v-layout>
			<v-layout align-center>
				<v-container fluid grid-list-lg>
					<v-layout row wrap>
						<v-flex v-for="product in products" xs12 sm6 md4 class="product-box">
							<Product :product="product"/>
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
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	h3 {
		margin: 40px 0 0;
	}
	.theme--light.v-card {
		display: flex;
		flex-direction: column;
	}
</style>