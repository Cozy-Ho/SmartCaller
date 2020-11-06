<template>
    <div class="contaienr">
        <div class = "left">
            <div class = "todo">
                <Todo></Todo>
            </div>
        </div>

        <div class = "center">
            <div class = "realMirror">
                <RealMirror></RealMirror>
            </div>
        </div>

        <div class = "bottom">
            <div class = "weather">
                <Weather></Weather>
            </div>
            <div class = "Time">
                <Time></Time>
            </div>
        </div>

        
    </div>
</template>

<script>
import Time from "../components/Mirror/Time.vue"
import Todo from "../components/Mirror/Todo.vue"
import Weather from "../components/Mirror/Weather.vue"
import RealMirror from "../components/Mirror/RealMirror.vue"

export default {
    name: 'Mirror',
    components: {
        Time,
        Todo,
        Weather,
        RealMirror
    }
}
</script>

<style scoped>
    .container {
        height: 720px;
        width: 1024px;
    }

    .left {

    }

    .center {

    }

    .right{

    }

    .time {

    }

    .todo {

    }

    .weather {
        width: 100%;
    }

    .realMirror {

    }
</style>