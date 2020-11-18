<template>
  <div>
    <Header></Header>
    <div class="comp">
      <component :is="selComp"></component>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import Comp_Cal from "./Comp_Cal";
import Footer from "./Footer";

export default {
  name: 'Main',
  components: {
    Header,
    Footer,
    Comp_Cal,
  },
  data () {
    return {
      selComp: 'Comp_Cal'
    }
  },
  created() {
    this.$socket.on("chat", (data) => {
      // var command = data.command;
      // if(command.startsWith("스마트캘러") || command.startsWith("스마트켈러")){
      //   this.selComp = data.command;
      // }
      // this.selComp = data.command;
      this.$store.commit("set_user_text",data.message);
    });
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comp{
  top: 200px;
}
</style>
