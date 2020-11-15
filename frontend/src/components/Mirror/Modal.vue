<template>
  <div class="modal" :class="{'is-active': modalOpen}">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">날짜</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <textarea
            class="textarea"
            :placeholder="placeholder"
            @input="typing"
            :value="contents"
        ></textarea>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="save">{{ buttonMessage[0] }}</button>
        <button class="button" @click="closeModal">{{ buttonMessage[1] }}</button>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import EventBus from "./EventBus";
  export default {
    name: "Modal",
    props: ["modalOpen"],
    data() {
      return {
        placeholder: "오늘 할 일을 적어주세요",
        buttonMessage: ["저장", "취소"],
      };
    },

    created () {
      this.$socket.on('calendar', (data) => {
        this.contents += '[' + data.socketId + ']' + data.contents + '\n'
      })
    },

    methods: {
      typing(event) {
        this.message = event.target.value;
      },
      closeModal() {
        this.$emit("closeModal", false); // $emit('이벤트명', value)
      },
      save() {
        axios.post('http://localhost:3000/save', {
          message: this.message,
          date: `${this.year}-${this.month}-${this.clickDay}`,
        }).then((result) => {
          console.log('result', result.data);
        }).catch((e) => {
          console.log('e', e);
        });
        const data = {
          year: this.year,
          month: this.month,
          day: this.clickDay,
          contents: this.contents,
        };
        EventBus.$emit("addList", data);
      },
      sendContents () {
      this.$socket.emit('calendar', {
        contents: this.contents,
        socketId: this.$socket.id
      })
      this.contents += '[' + this.$socket.id + ']' + this.contents + '\n'
      this.contents = ''
      this.socketId = this.$socket.id
    }
    },
  };
</script>