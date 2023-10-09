<template>
    <div>
        <header class="text-white py-3 bg-opacity-70 sticky top-0 z-50 bg-gray-800 h-[124px]">
            <nav class="container mx-auto h-full items-center relative flex-row justify-evenly">
                <div class="flex justify-center my-5 items-center">
                    <nuxt-link class="flex items-center mr-20" to="/">
                        <img src="~/assets/logo/herokuLogo.svg" class="w-10" alt="">
                        <span class="text-[#6762A6] font-bold text-xl">Library</span>
                    </nuxt-link>
                    <ul class="flex">
                        <li class="mx-1 py-0.5 text-sm">
                            Search the
                        </li>
                        <li class="mx-1 text-gray-600">
                            <select name="" id="">
                                <option value="">Name</option>
                            </select>
                        </li>
                        <li class="mx-1 py-0.5 text-sm">
                            by
                        </li>
                        <li class="mx-1 text-gray-600">
                            <select name="" id="">
                                <option value="">No HP</option>
                            </select>
                        </li>
                        <li class="mx-1 ">
                            <form action="">
                                <input  type="text">
                                <button class=" mx-2 border border-gray-600 p-1 w-6">
                                    <img src="~/assets/icons/iconSearch.svg" alt="">
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
                <div class="flex justify-center items-center">
                    <ul class="flex">
                        <li class="flex items-center mx-2">
                            <p class="text-xs pt-1 mx-1 font-bold">Browse The Library</p>
                            <img class="w-2 pt-1" src="~/assets/icons/illustratorDd.svg" alt="">
                        </li>
                        <li class="flex items-center mx-2">
                            <p class="text-xs pt-1 mx-1 font-bold">Attend Event Date</p>
                            <img class="w-2 pt-1" src="~/assets/icons/illustratorDd.svg" alt="">
                        </li>
                        <li class="mx-2 text-xs pt-1 font-bold">
                            Stream and Download
                        </li>
                        <li class="flex items-center mx-2">
                            <p class="text-xs pt-1 mx-1 font-bold">Research & Learn</p>
                            <img class="w-2 pt-1" src="~/assets/icons/illustratorDd.svg" alt="">
                        </li>
                        <li class="flex items-center mx-2">
                            <p class="text-xs pt-1 mx-1 font-bold">Use The library</p>
                            <img class="w-2 pt-1" src="~/assets/icons/illustratorDd.svg" alt="">
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>