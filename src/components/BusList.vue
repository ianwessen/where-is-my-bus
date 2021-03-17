<template>
	<p v-if="errorMessage">{{ errorMessage }}</p>
	<div v-if="!errorMessage">
		<h3>{{ minutes }} minutes and {{ seconds }} seconds</h3>

		<div class="sub-container">
			<span class="ticker"></span>
			<h3>Bus {{ vehicle }}</h3>
		</div>
	</div>
</template>

<script>
import { nextBusPrediction } from '../lib/utils';
import { getPredictionUrl } from '../lib/utils';

let predictionUrl = getPredictionUrl();

export default {
	name: 'BusList',
	props: {},
	data() {
		return {
			errorMessage: null,
			vehicle: null,
			minutes: null,
			seconds: null,
		};
	},
	mounted() {
		const fetchData = () => {
			fetch(predictionUrl)
				.then((res) => res.json())
				.then(nextBusPrediction)
				.then((predictions) => {
					if (!predictions) {
						this.errorMessage = 'No predictions';
						return;
					}

					let prediction;

					if (predictions.length) {
						prediction = predictions[0];
					} else {
						prediction = predictions;
					}

					const { vehicle, seconds } = prediction;

					this.vehicle = vehicle;
					this.minutes = Math.floor(Number(seconds) / 60);
					this.seconds = Math.floor((Number(seconds) % 60) / 10) * 10;
				})
				.catch((err) => {
					console.error(err);
					this.errorMessage = err.message;
				});
		};

		fetchData();

		this.$nextTick(function() {
			window.setInterval(() => {
				fetchData();
			}, 10000);
		});
	},
};
</script>

<style scoped>
.sub-container {
	position: relative;
	background-color: #2c3e50;
	color: #fff;
}

h3 {
	margin: 0;
	padding: 80px;
	font-size: 60px;
	font-weight: 700;
}

.ticker {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 20px;
	background-color: hsl(211, 21%, 71%);
	transform-origin: left center;
	animation: 3s scale-down linear infinite;
}

@keyframes scale-down {
	from {
		transform: scaleX(1);
		opacity: 0;
	}

	to {
		transform: scaleX(0);
		opacity: 1;
	}
}
</style>
