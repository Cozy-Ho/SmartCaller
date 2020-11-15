<template>
  <div>
    <div class="top">
      <span> {{ date }} </span> <br><br>
      <span> {{ time }} </span>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
      return {
        time: '',
        date: ''
      }
    },
    
    created() {
      setInterval(this.getNow, 1000);
    },
   
  
    methods:{
      getNow() {
          const today = new Date();
          const year = today.getFullYear()+'-';
          const month = today.getMonth()+1+'-';
          const day = today.getDate();

          const hour = today.getHours() + ":";
          const minute = today.getMinutes() + ":";
          const second = today.getSeconds();

          const time = hour + minute + second;
          const date = year + month + day;

          this.time = time;
          this.date = date;
      }
    }
}
</script>

<style scoped>
  .top {
    color: white;
    font-size: 30px;
  }
</style>