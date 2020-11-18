<template>
<div>
  <h1>일정 목록</h1>
  <div>
      <h2 v-if="count==0">몇 일 일정을 보여드릴까요?</h2>
  </div>
  
  <div>
      <li v-for="schedule in schedules" :key="schedule">{{schedule}}</li>
  </div>

</div>
</template>

<script>
import EventBus from "./EventBus";

export default {
    props:['schedules'],
    computed:{
        count(){
            return this.$store.state.count;
        }
    },
    watch:{
        count: function(){
            if(this.count == 1){
                EventBus.$emit("show_event");
            }
        }
    }
}
</script>

<style>

</style>