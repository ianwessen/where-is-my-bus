<template>
	<p v-if="errorMessage">{{ errorMessage }}</p>
	<div v-if="!errorMessage">
		<h4>{{ minutes }} minutes and {{ seconds }} seconds</h4>
		<h3>Bus {{ vehicle }}</h3>
	</div>
</template>

<script>
import { nextBusPrediction } from '../lib/utils'
import { getPredictionUrl } from '../lib/utils'

let predictionUrl = getPredictionUrl()

export default {
	name: 'BusList',
	props: {},
	data() {
		return {
			errorMessage: null,
			vehicle: null,
			minutes: null,
			seconds: null,
		}
	},
	mounted() {
		const fetchData = () => {
			fetch(predictionUrl)
				.then((res) => res.json())
				.then(nextBusPrediction)
				.then((prediction) => {
					const { vehicle, seconds } = prediction
					this.vehicle = vehicle
					this.minutes = Math.floor(Number(seconds) / 60)
					this.seconds = Math.ceil((Number(seconds) % 60) / 10) * 10
				})
				.catch((err) => {
					console.error(err)
					this.errorMessage = err.message
				})
		}

		fetchData()

		this.$nextTick(function() {
			window.setInterval(() => {
				fetchData()
			}, 10000)
		})
	},
}
</script>

<style scoped>
p {
	color: crimson;
	font-size: 48px;
	background-color: rgb(255, 220, 226);
	padding: 0.5em;
}
h3,
h4 {
	position: relative;
	margin: 0;
	padding: 80px;
	font-size: 90px;
	font-weight: 700;
}
h3 {
	background-color: #2c3e50;
	color: #fff;
}
h3:after {
	position: absolute;
	top: 0;
	left: 0;
	height: 20px;
	width: 20px;
	border: 1px solid red;
}
h4 {
}
</style>
