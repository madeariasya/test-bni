<template>
    <div class="body">
        <header class="text-white py-3 bg-opacity-70 sticky top-0 z-50 bg-gray-800 h-[64px]">
            <nav class="container mx-auto h-full items-center relative flex justify-center">
                <NuxtLink to="/" class="font-bold mx-10 text-2xl">Home</NuxtLink>
                <ul class="flex">
                    <li class="mx-3 font-bold"><NuxtLink to="/users">User</NuxtLink></li>
                    <li class="mx-3 font-bold"><NuxtLink to="/register">Register</NuxtLink></li>
                </ul>
            </nav>
        </header>
        
        <div class="p-14">
            <slot/>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .router-link-exact-active {
        background: linear-gradient(90deg,#3f37c9,rgb(215, 24, 123));
        background-clip: text;
        color: transparent;
    }
</style>