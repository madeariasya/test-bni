<template>
    <div>
        <div class="w-[800px] my-3 mx-auto items-center justify-center my-4 flex flex-warp">
            <div v-for="(el,index) in data" :key="index" class="bg-neutral-800 h-48 mx-3 w-56">
                <img :src=el.image alt="" class="h-[60%] w-full">
                <div class="p-2 overflow-auto ">
                    <h3 class="font-bold text-white text-xs">{{el.header}}</h3>
                    <p class="text-xs">{{el.body}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const data = [
    {
        image:'https://admin.bniexperience.com/uploads/2b93dfe5bd92f9a254bf53009cd0ba8d.webp',
        header: 'Croco',
        body: 'Diskon hingga 30% dengan Kartu Kredit dan Debit BNI Emerald'
    },
    {
        image:'https://admin.bniexperience.com/uploads/86ba64482259be4e9636637854036ccf.jpg',
        header: 'BACK TO CAMPUS',
        body: 'MAHASISWA PUNYA REKENING BNI, BANYAK BONUSNYA'
    },
    {
        image:'https://admin.bniexperience.com/uploads/1d5640d53fd4219e977001557e40b9e2.webp',
        header: 'GRAB',
        body: 'BNI Gesit di Grab dengan Kartu Kredit BNI. Dapatkan diskon hingga Rp15 Ribu'
    }
]
</script>

<style lang="scss" scoped>

</style>