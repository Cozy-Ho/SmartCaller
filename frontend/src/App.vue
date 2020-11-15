<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "bulma/css/bulma.css";
export default {
  name: 'App'
}
</script>

<style>
  #app {
    height: 1024px;
    width: 720px;
    background-color: black;
  }

</style>
