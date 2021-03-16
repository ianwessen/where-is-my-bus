<template>
	<div class="container">
		<BusList />
	</div>
</template>

<script>
import BusList from './components/BusList.vue'

export default {
	name: 'App',
	components: {
		BusList,
	},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

body {
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}

.container {
	/* border: 10px solid red; */
}

#app {
	font-family: Rubik, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
