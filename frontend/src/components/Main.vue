<template>
  <div>
    <Header></Header>
    <div class="comp">
      <component :is="selComp" v-bind:commands="commands" v-bind:events="event_data" v-bind:schedules="schedules"></component>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import Comp_Cal from "./Comp_Cal";
import Footer from "./Footer";
import Comp_Delete from "./Comp_Delete";
import Comp_Edit from "./Comp_Edit";
import Comp_Regist from "./Comp_Regist";
import Comp_Show from "./Comp_Show";
import Comp_Command_List from "./Comp_Command_List";

import axios from "axios";
import EventBus from './EventBus';

function sleep(t){
   return new Promise(resolve=>setTimeout(resolve,t));
}

// 명령어 필터링 함수
function filter(command){
  if(command == "comp_cal"){
    return "Comp_Cal";
  }else if(command == "comp_command_list"){
    return "Comp_Command_List"
  }else if(command == "comp_delete"){
    return "Comp_Delete";
  }else if(command == "comp_edit"){
    return "Comp_Edit";
  }else if(command == "comp_regist"){
    return "Comp_Regist";
  }else if(command == "comp_show"){
    return "Comp_Show";
  }else if(command == "cancel"){
    return "Comp_Cal";  
  }else{
    return "Comp_Cal";
  }
}

export default {
  name: 'Main',
  components: {
    Header,
    Footer,
    Comp_Cal,
    Comp_Delete,
    Comp_Edit,
    Comp_Regist,
    Comp_Show,
    Comp_Command_List,
  },
  watch:{
    selComp: function(){
      this.$store.commit("reset_count");
    }
  },
  data () {
    return {
      selComp: 'Comp_Cal',
      commands: [],
      event_data: [],
      event_id: null,
      schedules: []
    }
  },
  created() {
    this.$socket.on("chat", (data) => {
      console.log(data.message)
      axios({
        method: 'post',
        url: 'http://192.168.42.160:3000/STT/command',
        data: {
          command: data.message,
        }
      }).then((res)=>{
        if(res.data){
          this.$store.commit("set_user_text", res.data);
          var com = filter(res.data.command);
          if(res.data.result == "ok"){
            this.event_data=[];
            if(com == "Comp_Command_List"){
              this.commands = res.data.comp_command_list;
              this.selComp = com;
            }
            this.selComp = com;
          }else if(res.data.result == "fail"){
            this.$store.commit("plus_count");
            this.$store.commit("set_user_text", res.data.command);
            this.event_data.push(res.data.command);
          }
        }
      }).catch((error)=>{
        this.$store.commit("set_user_text", "인식하지 못했어요ㅠ 다시 말해주세요.");
        console.log(error);
      });
    });
  },
  mounted: function(){
    EventBus.$on("show_event", ()=>{
      axios({
        method:'post',
        url: 'http://192.168.42.160:3000/calendar/schedule_info',
        data:{
          date: this.event_data[0],
        },
      }).then((res)=>{
        if(res.data.result=='ok'){
          this.schedules = res.data.schedule_info;
          console.log(res.data.schedule_info);
        }else{
          console.log("error");
        }
      }).catch((error)=>{
        console.log(error);
      })
    });

    EventBus.$on("regist_event", ()=>{
      this.selComp="Comp_Cal";
      axios({
        method:'post',
        url: 'http://192.168.42.160:3000/calendar/schedule_regist',
        data: {
          title: this.event_data[0],
          date: this.event_data[1],
          time: this.event_data[2],
          contents: this.event_data[3]
        },
      }).then((res)=>{
        if(res.data==true){
          this.$store.commit("set_user_text", "일정이 등록되었습니다!");
          this.$store.commit("reset_count");
          this.event_data=[];
        }else{
          this.$store.commit("set_user_text", "일정 등록에 실패 하였습니다. 다시 시도해주세요.");
          this.$store.commit("reset_count");
          this.event_data=[];
        }
      });
    });

    EventBus.$on("edit_event", ()=>{
      this.selComp="Comp_Cal";
      axios({
        method:'post',
        url: 'http://192.168.42.160:3000/calendar/schedule_id',
        data: {
          title: this.event_data[1],
          date: this.event_data[0]
        },
      }).then((res)=>{
        if(res.data.result=='ok'){
          this.event_id = res.data.schedule_info.id;
          axios({
            method:'post',
            url: 'http://192.168.42.160:3000/calendar/schedule_edit',
            data:{
              id: this.event_id,
              title: this.event_data[2],
              date: this.event_data[3],
              time: this.event_data[4],
              contents: this.event_data[5]
            },
          }).then((res)=>{
            if(res.data==true){
              this.$store.commit("set_user_text", "정상적으로 수정되었습니다!");
              this.$store.commit("reset_count");
              this.event_data=[];
              this.event_id=0;
            }else{
              this.$store.commit("set_user_text", "일정 수정에 하였습니다. 다시 시도해주세요.");
              this.$store.commit("reset_count");
              this.event_data=[];
              this.event_id=0;
            }
          });
        }else{
          this.$store.commit("set_user_text", "일정 수정에 실패 하였습니다. 다시 시도해주세요.");
          this.$store.commit("reset_count");
          this.event_data=[];
          this.event_id=0;
        }
      }).catch((err)=>{
        console.log(error);
      });
      
    });

    EventBus.$on("del_event", ()=>{
      this.selComp="Comp_Cal";
      axios({
        method:'post',
        url: 'http://192.168.42.160:3000/calendar/schedule_delete',
        data: {
          title: this.event_data[1],
          date: this.event_data[0],
        },
      }).then((res)=>{
        if(res.data==true){
          this.$store.commit("set_user_text", "정상적으로 삭제되었습니다!");
          this.$store.commit("reset_count");
          this.event_data=[];
        }else{
          this.$store.commit("set_user_text", "일정 삭제에 실패 하였습니다. 다시 시도해주세요.");
          this.$store.commit("reset_count");
          this.event_data=[];
        }
      });
    });
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comp{
  top: 200px;
}
</style>
