<template>
	<div class="about">
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
