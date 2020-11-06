<template>
    <div class = "Container">
        <div>
            <LoginForm></LoginForm>
        </div>
    </div>
</template>

<script>
import LoginForm from "../components/Sign/LoginForm.vue"
export default {
    name: 'Login',
    components: {
        LoginForm
    }
}
</script>

<style scoped>
    .Container {
        width: 1024px;
        height: 720px;
        /* float: center; */
    }
</style>