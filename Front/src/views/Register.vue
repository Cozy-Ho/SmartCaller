<template>
    <div class = "Container">
        <div>
            <RegisterForm>
            </RegisterForm>
        </div>
    </div>
</template>

<script>
import RegisterForm from "../components/Sign/RegisterForm.vue"
export default {
    name: 'Register',
    components: {
        RegisterForm
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