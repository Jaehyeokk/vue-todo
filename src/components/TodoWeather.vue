<template>
	<div class="todo-weather">
		<div class="container">
			<p class="weather-img-wrap">
				<img
					:src="
						`http://openweathermap.org/img/w/${this.weather_info.weather[0].icon}.png`
					"
					alt=""
				/>
				<span class="weather-temp"
					>{{ Math.floor(this.weather_info.main.temp - 273) }}&#8451;</span
				>
			</p>
			<p class="weather-city">
				{{ this.weather_info.name }}, {{ this.weather_info.sys.country }}
			</p>
			<p class="weather-temp-desc">
				{{ this.weather_info.weather[0].description }}
			</p>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	created() {
		this.getCurrentLocationWeather();
	},
	data() {
		return {
			weather_info: '',
		};
	},
	methods: {
		getCurrentLocationWeather() {
			const success = position => {
				const {
					coords: { latitude: lat, longitude: lon },
				} = position;
				this.fetchWeather(lat, lon);
			};

			const fail = () => {
				console.log('fail');
			};

			navigator.geolocation.getCurrentPosition(success, fail);
		},
		fetchWeather(lat, lon) {
			const API_KEY = '8a1afe376ff8ec3b259be2ea83f17c60';
			axios
				.get(
					`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
				)
				.then(({ data }) => {
					this.weather_info = data;
				})
				.catch(err => {
					console.log(err);
				});
		},
	},
};
</script>

<style scoped>
.todo-weather {
	padding: 10px 0;
	text-align: right;
}

.todo-weather p {
	padding: 3px 0;
	color: #eaf1fb;
}

.container {
	width: 80%;
	min-height: 100px;
	margin: 0 auto;
}

.weather-img-wrap {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.weather-temp {
	padding-left: 10px;
	font-size: 27px;
}
</style>
