<template>
    <div class="flex-row">
        <div class="bg-purple-800 flex items-center justify-center  w-full h-40">
            <img src="~/assets/illustrator/illustratorEmail.svg" class="w-16" alt="">
            <div class="mx-4">
                <h1 class="font-bold text-white text-xl">Sign Up for our eNewslatter</h1>
                <p class="text-gray-500 text-sm">Stay up to-date with all library news and events by signing up for our eNewsletter</p>
            </div>
            <form class="flex-row">
                <p class="text-sm text-white my-1">Email</p>
                <input type="text" class="w-50">
                <p class="text-[10px] text-white my-3">the information will be submitted via email. Learn More</p>
                <button class="border border-white bg-purple text-white py-1 px-3">Sign Up</button>
            </form >
        </div>
        <div class="flex items-center justify-center py-8 w-full">
            <div class="w-6 h-full">
                <div class="my-2">
                    <a href="https://twitter.com" rel="noopener" target="_blank">
                    <Twitter />
                    </a>
                </div>
                <div class="my-2">
                    <a href="https://facebook.com" rel="noopener" target="_blank">
                    <Facebook />
                    </a>
                </div>
                <div class="my-2">
                    <a href="https://linkedin.com" rel="noopener" target="_blank">
                    <Linkedin />
                    </a>
                </div>
                <div class="my-2">
                    <a href="https://instagram.com" rel="noopener" target="_blank">
                    <Instagram/>
                    </a>
                </div>
            </div>
            <div class="ml-6">
                <h1 class="font-bold">Connect with Us</h1>
                <p class="text-xs">Contact Us</p>
                <p class="text-xs">eNewsletter Archives</p>
                <p class="text-xs">Download the App</p>
                <p class="text-xs">Doing Busines</p>
                <p class="text-xs">Employeed</p>
            </div>
            <div class="ml-6">
                <h1 class="font-bold">About The Library</h1>
                <p v-for="(el, index) in about" :key="index" class="text-xs">{{el}}</p>
            </div>
            <div class="ml-6">
                <h1 class="font-bold">About The Library</h1>
                <p v-for="(el, index) in support" :key="index" class="text-xs">{{el}}</p>
            </div>
            <div class="ml-20 text-white">
                <div class="bg-purple-800 p-2">
                    <p class="text-xs">715 Market Avenue N</p>
                    <p class="text-xs">Canton, OH 44702</p>
                    <p class="text-xs font-bold underline">330-452-0665</p>
                </div>
                <div>
                    <button class="border border-white bg-purple text-white py-1 w-full mt-2 px-5">Contact Us</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {Twitter , Facebook , Linkedin , Instagram} from 'lucide-vue-next'

const about = ['Our Mission', 'Reimagine', 'Board of Trustees','News & Press Release','Policies','Library Publications']
const support = ['Donate','Get Involved','Library Fondation','Friends of the Library','Library']
</script>

<style lang="scss" scoped>

</style>