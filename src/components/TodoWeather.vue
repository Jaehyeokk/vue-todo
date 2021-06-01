<template>
  <div class="todo-weather">
    <div class="container">
      {{ this.fetched_weather }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.fetchWeather();
  },
  data() {
    return {
      fetched_weather: "",
    };
  },
  methods: {
    fetchWeather() {
      const city_name = "Seoul,KR";
      const API_key = "";
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`
        )
        .then(({ data }) => {
          this.fetched_weather = data;
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
