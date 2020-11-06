<template>
<div class="container">

    <div class= "top">
        <h1>유저를 등록 하겠습니다.<br/>
            카메라를 봐주세요.
        </h1>
    </div>

    <div class="cam">
        <video v-bind:src="src" v-bind:width="width" v-bind:height="height" v-bind:autoplay="autoplay" ref="video"></video>
        <hr/>
        <img v-bind:src="photo" alt="" v-bind:width="width" v-bind:height="height"/>
        <hr/>
        <button type="button" v-on:click="takePhoto">Take Photo</button>
    </div>

</div>
</template>

<script>
export default {
    name: 'RegisterForm',
}
</script>

<style scoped>
    .top {
        width: 100%;
        height: 10%;
        text-align: center;
    }

    .cam {
        width: 100%;
        height: 90%;
    }
</style>