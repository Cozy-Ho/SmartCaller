<template>
    <div class="contaienr">
        <div class = "left">
            <div style="height: 35%; margin-top: 5px; margin-right: 15px;">
                <Calendar></Calendar>
            </div>
            <div style="height: 35%; margin-top: 5px; margin-right: 5px;">
                <Todo></Todo>
            </div>
        </div>

        <div class = "center">
            <div class = "realMirror">
                <RealMirror></RealMirror>
            </div>
        </div>

        <div class = "bottom">
            <div style="flex: 1; float: left; width: 70%;">
                <Weather></Weather>
            </div>
            <div style="flex: 1; float: right; width: 30%; margin-top:30px; margin-left: 10px;">
                <Time></Time>
            </div>
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
        overflow-y: hidden;
    }

    .left {
        height: 70%;
        margin-left: 450px;
    }

    .bottom {
        display: flex;
        left: 0;
        bottom: 0;
        top: 0;
        height: 30%;
        width: 100%;
    }

    .center {
        height: 70%;
        width: 100%;
    }

   
</style>