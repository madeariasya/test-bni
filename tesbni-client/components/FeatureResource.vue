<template>
    <div>
        <div class="mx-auto text-center bg-neutral-800 p-4">
            <h1 class="font-bold text-purple-800 text-3xl mb-6">Feature Resource</h1>
            <div class="w-[800px] my-3 mx-auto items-center justify-center flex flex-warp">
                <div class="bg-neutral-800 h-80 mx-3 w-[450px]">
                    <img :src=one.image alt="" class="h-[60%] w-full">
                    <div class=" overflow-auto ">
                        <NuxtLink v-if="one.tag" to="/maintenance" class="font-bold block text-left text-sky-400 pt-2 text-xs">{{one.tag}}</NuxtLink>
                        <h3 class="font-bold text-left text-white pt-0.5 pb-2 text-xs">{{one.header}}</h3>
                        <p class="text-xs text-justify">{{one.body}}</p>
                    </div>
                </div>
                <div v-for="(el,index) in data" :key="index" class="bg-neutral-800 h-80 mx-3 w-56">
                    <img :src=el.image alt="" class="h-[60%] w-full">
                    <div class=" overflow-auto ">
                        <NuxtLink v-if="el.tag" to="/maintenance" class="font-bold block text-left text-sky-400 pt-2 text-xs">{{el.tag}}</NuxtLink>
                        <h3 class="font-bold text-left text-white pt-0.5 pb-2 text-xs">{{el.header}}</h3>
                        <p class="text-xs text-justify">{{el.body}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const one={
        tag :'Miscellaneous',
        image:'https://admin.bniexperience.com/uploads/459a8e9a3972dba5a524ea2ae6ff44e4.webp',
        header: 'Inacraft',
        body: 'Diskon hingga 25% Pembelian Tiket Masuk di Special Line Ticket Box BNI dengan Kartu BNI dan QRIS BNI Mobile Banking'
    }
const data = [
    {
        tag :'elektronik',
        image:'https://admin.bniexperience.com/uploads/516ea6ce5f161b4986bc67028af6b3b4.webp',
        header: 'Telkomsel',
        body: 'Dapatkan Ekstra Pulsa Rp 25.000 dengan BNI Mobile Banking'
        
    },
    {
        image:'https://admin.bniexperience.com/uploads/4dc0cdf0611b8db97b33841c74da0a68.webp',
        header: 'Festivibes All Gen 2023',
        body: 'Dapatkan Penawaran Menarik dari BNI di Festival All Gen 2023'
    }
]
</script>

<style lang="scss" scoped>

</style>