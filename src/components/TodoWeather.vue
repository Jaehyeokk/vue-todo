<template>
  <div class="todo-weather">
    <div class="container">
      {{ this.weather_info }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.getCurrentLocationWeather();
  },
  data() {
    return {
      weather_info: "",
    };
  },
  methods: {
    getCurrentLocationWeather() {
      const success = (position) => {
        const {
          coords: { latitude: lat, longitude: lon },
        } = position;
        this.fetchWeather(lat, lon);
      };

      const fail = () => {
        console.log("fail");
      };

      navigator.geolocation.getCurrentPosition(success, fail);
    },
    fetchWeather(lat, lon) {
      const API_KEY = "8a1afe376ff8ec3b259be2ea83f17c60";
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        )
        .then(({ data }) => {
          this.weather_info = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
