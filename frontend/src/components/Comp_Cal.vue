<template>
  <div style="right: 0; height:200px; float: right">
    <b-calendar
          v-model="value"
          @context="onContext"
          locale="ko-KR"
    ></b-calendar>
  </div>
</template>

<script>
export default {
    data() {
      return {
        value: '',
        context: null
      }
    },
    methods: {
      onContext(ctx) {
        this.context = ctx
      }
    }
  }
</script>

<style scoped>
#__BVID__15__calendar-wrapper_{
    background-color: black !important;
}
</style>