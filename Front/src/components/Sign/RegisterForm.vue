<template>
<div class="container">

    <div class= "top">
        <h1>유저를 등록 하겠습니다.<br/>
            카메라를 봐주세요.
        </h1> 
    </div>

    <div class="cam"> 
        <main>
            <Camera ref="camera" width="100%" height="300" />
            <!-- <button @click="getPhoto">Click photo</button> -->
            <!-- <img alt="Your image" :src="src" v-if="src"> -->
        </main>
    </div>
        
</div>


</template>

<script>
import Camera from "vue-html5-camera"
export default {
    name: 'RegisterForm',
    data() {
        return {
            src: ""
        }
    },

    components: {
        Camera
    },

    methods: {
        getPhoto() {
            this.src = this.$refs.camera.click();
        }
    }
}
</script>

<style scoped>
    .top {
        margin-top: 40px;
        width: 100%;
        height: 10%;
        text-align: center;
    }

    .cam {
        margin-top: 30px;
        text-align: center;
        width: 100%;
        height: 90%;
    }
</style>
