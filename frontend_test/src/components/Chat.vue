<template>
  <div class="page-container">
    <app>
      <app-toolbar class="primary">
        <div class="toolbar-row">
          <span class="title">My Chat App</span>
        </div>
      </app-toolbar>
      <app-content>
        <field>
          <label>Message</label>
          <textarea
            v-model="textarea"
            disabled
            v-auto-scroll-bottom
          ></textarea>
        </field>
        <field>
          <label>Your Message</label> <input v-model="message" type="text">
          <button class="primary raised" @click="sendMessage()"
            >Submit</button
          >
        </field>
      </app-content>
    </app>
  </div>
</template> <script>
export default {
  name: "Chat",
  created() {
    this.$socket.on("chat", (data) => {
      this.textarea += data.message + "\n";
    });
  },
  data() {
    return { textarea: "", message: "" };
  },
  methods: {
    sendMessage() {
      this.$socket.emit("chat", { message: this.message });
      this.textarea += this.message + "\n";
      this.message = "";
    },
  },
};
</script> 
<style>
.app {
  height: 800px;
  border: 1px solid rgba(#000, 0.12);
}
.textarea {
  height: 300px;
}
</style>
