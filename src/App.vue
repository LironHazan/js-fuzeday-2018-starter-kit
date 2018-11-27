<template>
	<div id="app">
		<Navbar/>
		<router-view/>
	</div>
</template>
<script>
	import Navbar from "./components/Navbar.vue";
    import { client } from './services/shopify-client';

	export default {
		components: {
			Navbar
		},
		mounted: function () {
		    const this$ = this;
		    console.log(this.$store.getters.inCart);
            // client.checkout.create()
            //     .then(function (products) {
            //         const {lineItems} = products;
            //         this$.$store.dispatch('setCartItems', lineItems);
            //         console.log('lineItems', this$.$store.getters.inCart);
            //     });
        }
    };
</script>
<style lang="scss" scoped>
	#app {
		font-family: Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>