<template>
<div class="container">

    <div class= "top">
        <h1>유저를 등록 하겠습니다.<br/>
            카메라를 봐주세요.
        </h1>
        <Camera ref="camera" width="300" height="300" />
        <!-- <button @click="getPhoto">Click photo</button>
        <img alt="Your image" :src="src" v-if="src"> -->
    </div>
</div>
</template>

<script>
import Camera from "vue-html5-camera"
export default {
    name: 'RegisterFrom',

    data() {
        return {
            src: ""
            }
    },

    methods: {
        // getPhoto() {
        // this.src = this.$refs.camera.click();
        // }
    },

    components: {
        Camera
    }
}
</script>

<style scoped>
    .top {
        padding-top: 30px;
        height: 1024px;
        width: 720px;
        text-align: center;
        color: white;
    }
</style>