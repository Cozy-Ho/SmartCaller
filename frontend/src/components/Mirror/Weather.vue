<template>
  <vue-weather 
    api-key="07a1e1f47b9aeef4da6fb8ee3dd1fad7" 
    latitude="37.5642135"
    longitude="127.0016985"
    language="kr"
    units="uk"
    />
</template>

<script>
  import VueWeather from "vue-weather-widget";
 
  export default {
    name : 'Weather',
    components: {
      VueWeather,
    },
  };
</script> 