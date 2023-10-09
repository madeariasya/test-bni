<template>
    <div class="w-[800px] mx-auto text-center my-6">
        <h1 class="font-bold text-purple-800 text-3xl mb-6">What's New - Library Blog</h1>
        <Carousel v-bind="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in data" :key="slide" >
            <NuxtLink :to=slide.link>
                <div class="bg-neutral-800 h-48 mx-3 w-56">
                    <img :src=slide.image alt="" class="h-[60%] w-full">
                    <div class="p-2 overflow-auto ">
                        <h3 class="text-left font-bold text-white text-xs">{{slide.header}}</h3>
                        <p class=" text-left text-xs">{{slide.body}}</p>
                    </div>
                </div>
            </NuxtLink>
          </Slide>
      
          <template #addons>
            <Navigation ><p class="text-white">next</p></Navigation>
          </template>
        </Carousel>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'Breakpoints',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    data: () => ({
      data :[
        {
            image:'https://marketplace.canva.com/EAFPRbgH4A4/1/0/1600w/canva-ungu-gradien-moderen-acara-seminar-nasional-banner-n6jNStf9Q_U.jpg',
            header: 'Meet Taylor and Murad',
            link:'/maintenance',
            body: 'Peluang dan tantangan bisnis tahun 2023 agar bertahan dalam krisis global'
        },
        {
            image:'https://admin.bniexperience.com/uploads/30eed62135dae272b44b384337ea33ad.webp',
            header: 'Pegi Pegi',
            link:'/maintenance',
            body: 'Discount dan promo menarik bersama pegi pegi hingga 50%'
        },
        {
            image:'https://www.bni.co.id/portals/1/bni/beranda/promo/images/Investasi-BNI-Mobile-Banking.jpg',
            header: 'Investasi Mudah',
            link:'/maintenance',
            body: 'Ingin investasi tapi bingung mulai dari mana? BNI Mobile Banking bisa jadi pilihan tepat untuk Anda.'
        },
        {
            image:'https://admin.bniexperience.com/uploads/2bb4b469c3a1d73a2a77cda5d6cf0c52.webp',
            header: 'Belanja di Luar Negeri',
            link:'/maintenance',
            body: 'Belanja di Luar Negeri Lebih Ringan dengan Kartu Kredit BNI!'
        },
        {
            image:'https://admin.bniexperience.com/uploads/87007acba9102b651317f89437d0dc3b.jpg',
            header: 'SPEKTA BNI AGEN46',
            link:'/maintenance',
            body: 'Hadiah Menarik untuk BNI Agen46 Terbaik . Ayo tabung sekarang untuk mendapat hadiah menarik.'
        },
        {
            image:'https://admin.bniexperience.com/uploads/036e71848c2d9f137fec374568e38636.webp',
            header: 'Mama Roz',
            link:'/maintenance',
            body: 'Dapatkan Potongan Langsung Rp 25 Ribu dengan QRIS BNI Mobile Banking'
        },
        {
            image:'https://admin.bniexperience.com/uploads/2b93dfe5bd92f9a254bf53009cd0ba8d.webp',
            header: 'Croco',
            link:'/maintenance',
            body: 'Diskon hingga 30% dengan Kartu Kredit dan Debit BNI Emerald'
        },
        {
            image:'https://admin.bniexperience.com/uploads/86ba64482259be4e9636637854036ccf.jpg',
            header: 'BACK TO CAMPUS',
            link:'/maintenance',
            body: 'MAHASISWA PUNYA REKENING BNI, BANYAK BONUSNYA'
        },
        {
            image:'https://admin.bniexperience.com/uploads/1d5640d53fd4219e977001557e40b9e2.webp',
            header: 'GRAB',
            link:'/maintenance',
            body: 'BNI Gesit di Grab dengan Kartu Kredit BNI. Dapatkan diskon hingga Rp15 Ribu'
        }
     ],
      settings: {
        itemsToShow: 1,
        itemsToSlide:1,
        snapAlign: 'center',
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 1024 and up
        1024: {
          itemsToShow: 3,
          itemsToSlide:3,
          snapAlign: 'start',
        },
      },
    }),
  })
  </script>
  