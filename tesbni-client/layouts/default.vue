<template>
    <div>
        <Navbar/>
        <div>
            <slot/>
        </div>
    </div>
</template>

<script setup>
    import Navbar from '~/components/Navbar.vue';
</script>

<style scoped>
.router-link-exact-active {
    color: rgb(0, 148, 39);
}
</style>