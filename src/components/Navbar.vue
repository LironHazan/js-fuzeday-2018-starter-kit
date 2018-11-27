<template>
	<div class="navbar">
		<router-link to="/">Products</router-link>
		<router-link to="/cart">
		    <v-badge left color="red">
      			<span slot="badge">{{cartCount}}</span>
				<v-icon
					large
					color="grey lighten-1">
					shopping_cart
      			</v-icon>
    		</v-badge>
		</router-link>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			cartCount: this.$store.getters.inCartAmount
		}
	}
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.navbar {
		width: 100%;
		background-color: #2c3e50;
		padding: 15px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		border-bottom: 1px solid #eee;

		a {
			padding-left: 10px;
			color: lightblue;
			padding-left: 2rem;
		}
	}
</style>
