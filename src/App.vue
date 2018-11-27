<template>
	<div id="app">
		<Navbar/>
		<SearchInput />
		<router-view/>
	</div>
</template>
<script>
	import Navbar from "./components/Navbar.vue";
    import SearchInput from "./components/SearchInput.vue";


    export default {
		components: {
			Navbar,
          SearchInput
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