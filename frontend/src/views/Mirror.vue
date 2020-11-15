<template>
    <div class="contaienr">
        <div class = "top">
            <div style="flex: 1; height: 200px;">
                <Weather></Weather>
            </div>
            <div style="flex: 1; height: 200px; padding-top: 20px; text-align: center">
                <Time></Time>
            </div>

        </div>

        <div class = "left">
                <Calendar></Calendar>
                <Todo></Todo>
        </div>

        <div class = "bottom">
            <RealMirror></RealMirror>
        </div>

        
    </div>
</template>

<script>
import Time from "../components/Mirror/Time.vue"
import Todo from "../components/Mirror/Todo.vue"
import Weather from "../components/Mirror/Weather.vue"
import Calendar from "../components/Mirror/Calendar.vue"
import RealMirror from "../components/Mirror/RealMirror.vue"

export default {
    name: 'Mirror',
    components: {
        Time,
        Todo,
        Weather,
        RealMirror,
        Calendar
    }
}
</script>

<style scoped>
    .container {
        height: 1024px;
        width: 720px;
    }

    .top {
        display: flex;

    }

    .left {
        height: 824px;
        padding-left: 400px;
    }
</style>