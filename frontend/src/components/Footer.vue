<template>
  <div class="footer">
      <h1>{{message.command}}</h1>
  </div>
</template>

<script>
export default {
    computed:{
        message(){
            return this.$store.state.user_text;
        }
    }

}
</script>

<style>
.footer {
    width:100%;
    height:100px;
    position:absolute;
    bottom:0;
    margin-bottom: 100px;
    background:black;
    text-align: center;
    color: white;
}
</style>