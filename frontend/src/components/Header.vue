<template>
  <div class="header">
    <div style="width: 65%; height:150px; float: left;">
      <vue-weather
        api-key="6ee2a88205ea4588a65538ecf333db6c"
        units="uk"
        hide-header="true"
        bar-color="white"
        text-color="white"
        latitude="37.532600"
        longitude="127.024612"
      />
    </div>
    <digital-clock-vue
    color="white"
    style="background: black; width: 30%; height:150px; float: left;"
    />
  </div>
</template>

<script>
import VueWeather from "vue-weather-widget";
import DigitalClockVue, { DigitalNumber } from 'digital-clock-vue'

export default {
  name: 'Main',
  components: {
      VueWeather,
      DigitalClockVue,
      DigitalNumber
    },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
.header{
  width: 720px;
  height: 200px;
}
</style>