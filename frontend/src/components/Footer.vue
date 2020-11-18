<template>
  <div class="footer">
      <h2>{{message}}</h2>
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
    background:black;
    text-align: center;
    color: white;
}
</style>