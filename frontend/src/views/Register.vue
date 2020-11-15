<template>
    <div class = "Container">
        <div>
            <RegisterForm></RegisterForm>
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
        height: 1024px;
        width: 720px;
        background-color: black;

    }
</style>