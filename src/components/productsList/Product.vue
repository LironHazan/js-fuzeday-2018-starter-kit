<template>
	<div class="about">
		<router-link to="/product">product</router-link>
		<div>{{product.id}}</div>
	</div>
</template>
<script>
    export default {
        name: "Product",
        props: {
            product: Object
        },
    }
</script>