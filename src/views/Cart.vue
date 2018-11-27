<template>
	<div class="home">
		<Cart> </Cart>
	</div>
</template>
<script>
    // @ is an alias to /src
    import Cart from '@/components/cart/Cart.vue'

    export default {
        name: 'cart',
        components: {
            Cart
        }
    }
</script>
<style scoped lang="scss">
	.home {
		padding-top: 90px;
	}
</style>
