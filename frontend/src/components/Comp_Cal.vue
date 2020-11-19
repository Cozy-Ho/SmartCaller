<template>
  <div>
    <div style="margin-left: 50px; height: 200px; width: 360px; float: left">
      <b-calendar
        v-model="value"
        @context="onContext"
        locale="ko-KR"
      ></b-calendar>
    </div>
    <div style="margin-left: 30px; height: 200px; width:200px; float: left">
      <p>
        <b>'{{ value }}'의 일정 목록</b>
      </p>
      <ol v-for="event in event_data" :key="event">
        <li>
          <p>일정 제목 : {{event.title}}</p>
          <p>일정 시간 : {{event.time}}</p>
          <p>일정 내용 : {{event.contents}}</p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      value: "오늘",
      context: null,
      event_data: [],
    };
  },
  methods: {
    onContext(ctx) {
      this.context = ctx;
    },
  },
  mounted: function () {
    axios({
      method: "get",
      url: "http://localhost:3000/calendar/schedule_today",
    })
      .then((res) => {
        this.event_data = res.data.schedule_today;
        console.log(res.data.schedule_today);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
#__BVID__15__calendar-wrapper_ {
  background-color: black !important;
}
</style>