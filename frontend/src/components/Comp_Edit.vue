<template>
<div>
  <h1>일정 수정</h1>
  <div>
      <h2 v-if="count==0">몇 일의 일정을 수정할까요?</h2>
      <h2 v-if="count==1">수정 할 일정 제목은 무엇인가요?</h2>
      <h2 v-if="count==2">일정 수정을 시작합니다.<br>일정 제목은 무엇으로 할까요?</h2>
      <h2 v-if="count==3">일정을 언제로 등록 할까요?</h2>
      <h2 v-if="count==4">몇 시 일정인가요?</h2>
      <h2 v-if="count==5">일정 설명을 말씀해 주세요</h2>
  </div>
  <div>
      <li v-for="event in events" :key="event">{{event}}</li>
  </div>

</div>
</template>

<script>
import EventBus from "./EventBus";

export default {
    props:['events'],
    computed:{
        count(){
            return this.$store.state.count;
        }
    },
    watch:{
        count: function(){
            if(this.count == 6){
                EventBus.$emit("edit_event");
            }
        }
    }
}
</script>

<style>

</style>