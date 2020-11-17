<template>
  <div class="container">
    <div style="flex=1; width=360px">
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
    <div style="flex=1; width=360px">
      <!-- <digital-clock :blink="true" :twelveHour="true"/> -->
    </div>
  </div>
</template>

<script>
import VueWeather from "vue-weather-widget";


export default {
  name: 'Main',
  components: {
      VueWeather,
    },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
