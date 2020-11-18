<template>
  <div>
      <h1>명령어 리스트</h1>
      <li v-for="command in commands" :key="command">
        <h2 >{{command}}</h2>
      </li>
  </div>
</template>

<script>
export default {
    props:['commands']
}
</script>

<style>

</style>