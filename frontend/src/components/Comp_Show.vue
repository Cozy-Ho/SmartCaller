<template>
<div>
  <h1>일정 목록</h1>
  <div>
      <h2 v-if="count==0">몇 일 일정을 보여드릴까요?</h2>
  </div>
  
  <ol v-for="schedule in schedules" :key="schedule">
      <li>
        <p>일정 제목 : {{schedule.title}}</p>
        <p>일정 시간 : {{schedule.time}}</p>
        <p>일정 내용 : {{schedule.contents}}</p>
      </li>
  </ol>

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