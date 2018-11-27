<template>
	<div class="navbar">
		<router-link to="/">Products</router-link>
		<a class="link" @click="moveToCart">
			<v-badge left color="red" @click="moveToCart">
				<span slot="badge">{{$store.getters.inCartAmount}}</span>
				<v-icon
					large
					color="grey lighten-1">
					shopping_cart
				</v-icon>
			</v-badge>
		</a>
	</div>
</template>
<script>
export default {
	methods: {
		moveToCart: function() {
			this.$router.push({ name: 'cart' });
		}
	}
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.navbar {
		position: fixed;
		z-index: 99999;
		width: 100%;
		background-color: #2c3e50;
		padding: 15px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		border-bottom: 1px solid #eee;

		a {
			cursor: pointer;
			padding-left: 10px;
			color: lightblue;
			padding-left: 2rem;
		}
	}
</style>
