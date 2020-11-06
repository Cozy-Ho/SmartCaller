<template>
    <div>
      <h1> {{ date }} </h1>
      <h1> {{ time }} </h1>
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
          const year = today.getFullYear()+'년';
          const month = today.getMonth()+1+'월';
          const day = today.getDate()+'일';

          const hour = today.getHours() + "시";
          const minute = today.getMinutes() + "분";
        //   const second = today.getSeconds();

          const time = hour + minute;
          const date = year + month + day;

          this.time = time;
          this.date = date;
      }
    }
}
</script>