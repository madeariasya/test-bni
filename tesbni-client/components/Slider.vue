<template>
    <Carousel class="h-[500px] flex-rows">
      <Slide class="object-cover p-0 h-[500px]" v-for="slide in image" :key="slide">
        <img class="h-[500px] object-cover w-full" :src=slide alt="">
      </Slide>
  
      <template #addons>
        <Navigation class="-top-8 relative"/>
        <Pagination class="-top-8 relative"/>
      </template>
    </Carousel>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'Basic',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    data() {
        return {
            image:[
                'https://admin.bniexperience.com/uploads/8c8cda03ec7295c076eb90f8db8ca5e4.webp',
                'https://images.unsplash.com/photo-1524591431555-cc7876d14adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2914&q=80',
                'https://admin.bniexperience.com/uploads/bd92a62daaf2d5bd39ab969318682a2a.webp'

            ]
        }
    },
  })
  </script>
  
  <style>
  .carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: wheat;
    color: gray;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
  }
  </style>
  