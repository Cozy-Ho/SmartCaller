<template>
    <div class="top">
        <div class="columns" v-for="(items, idx) in list" :key="idx">
            <div class="column" v-for="(item, subIdx) in items" :key="subIdx">
                <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                    {{ item.year }}년 {{ item.month }}월 {{ item.day }}일
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">{{ item.message }}</div>
                </div>
                <footer class="card-footer">
                    <button
                    class="card-footer-item button is-primary is-light"
                    @click="removeItem(idx, subIdx)"
                    >
                    삭제
                    </button>
                </footer>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import EventBus from "./EventBus";
import axios from "axios";

export default {
    name: "Todo",
    props: ["year", "month", "list"],
    data() {
      return {
        title: "내가 등록한 일정 리스트",
        datas: null,
      };
    },
    methods: {
      removeItem(idx, subIdx) {
        axios
          .delete("http://localhost:3000/remove", {
            data: {
              // eslint-disable-next-line no-underscore-dangle
              id: this.list[idx][subIdx]._id,
            },
          })
          .then(() => {
            EventBus.$emit("removeList", { idx, subIdx });
          });
      },
    },
}
</script>

<style lang="scss" scoped>
    .top {
        color: white;
        font-size: 15px;
    }
</style>