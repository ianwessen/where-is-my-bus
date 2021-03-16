<template>
	<h4>{{ minutes }} minutes and {{ seconds }} seconds</h4>
	<h3>Bus {{ vehicle }}</h3>
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
			vehicle: null,
			minutes: null,
			seconds: null,
		}
	},
	mounted() {
		fetch(predictionUrl)
			.then((res) => res.json())
			.then(nextBusPrediction)
			.then((prediction) => {
				const { vehicle, seconds } = prediction
				this.vehicle = vehicle
				this.minutes = Math.floor(Number(seconds) / 60)
				this.seconds = Number(seconds) % 60
			})
			.catch((err) => console.error(err))
	},
}
</script>

<style scoped>
h3,
h4 {
	margin: 0;
	padding: 80px;
	font-size: 90px;
}
h3 {
	background-color: #2c3e50;
	color: #fff;
}
h4 {
}
</style>
