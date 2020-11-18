<template>
<div>
  <div style="margin-left: 50px; height:200px; float: left">
    <b-calendar
          v-model="value"
          @context="onContext"
          locale="ko-KR"
    ></b-calendar>
  </div>
  <div style="margin-left: 30px; height:200px; float: left">
      <p><b>'{{ value }}' 일정</b></p>
      <p class="mb-0">Context:</p>
      <pre class="small">{{ context }}</pre>
  </div>
</div>

</template>

<script>
export default {
    data() {
      return {
        value: '오늘',
        context: null
      }
    },
    methods: {
      onContext(ctx) {
        this.context = ctx;
      }
    },

  }
</script>

<style scoped>
#__BVID__15__calendar-wrapper_{
    background-color: black !important;
}
</style>