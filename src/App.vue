<template>
	<div class="container">
		<BusList />
	</div>
</template>

<script>
import BusList from './components/BusList.vue';

export default {
	name: 'App',
	components: {
		BusList,
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

html {
	background-color: #2c3e50;
}
body {
	margin: 0;
	padding: 0;
	background: #fff;
}

#app {
	font-family: Rubik, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
