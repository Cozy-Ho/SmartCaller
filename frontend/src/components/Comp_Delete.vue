<template>
<div>
  <h1>일정 삭제</h1>
  <div>
      <h2 v-if="count==0">몇 일의 일정을 삭제할까요?</h2>
      <h2 v-if="count==1">삭제 할 일정 제목은 무엇인가요?</h2>
  </div>
    <div>
        <li v-for="event in events" :key="event">{{event.command}}</li>
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
            if(this.count == 2){
                EventBus.$emit("del_event");
            }
        }
    }
}
</script>

<style>

</style>