<template>
    <div>
        <div class="container w-[500px] h-[600px] grid gap-10 lg:grid-cols-2 mx-auto px-5">
            <div class='relative group w-[500px]'>
            <div class="absolute -inset-1 bg-gradient-to-r from-indigo-600 opacity-50 duration-300 group-hover:opacity-100 to-pink-600 rounded-lg blur"/>
            <form @submit.prevent="register({name,numberPhone,bornDate,province,district})" class="flex relative flex-col w-full h-full p-8 rounded-2xl bg-neutral-800">
                <div class="text-center">
                    <h1 class="bg-gradient-to-tl from-pink-600 to-indigo-600 bg-clip-text text-transparent font-bold text-4xl mb-8">Register Page</h1>
                </div>
                <div class="flex item-center my-5 justify-center">
                    <div class="relative ">
                        <input v-model="name" type="text" class="border-b border-gray-500 py-1 w-[400px] bg-neutral-800 focus:border-purple-600 focus:border-b-2 focus:outline-none transition-color peer">
                        <label :class="{ 'text-xs':name ,'-top-[17px]':name ,'text-purple-600':name}" class="absolute pointer-events-none left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600">Nama</label>
                    </div>
                </div>
                <div class="flex item-center my-5 justify-center">
                    <div class="relative ">
                        <input v-model="numberPhone" type="text" class="border-b border-gray-500 py-1 w-[400px] bg-neutral-800 focus:border-purple-600 focus:border-b-2 focus:outline-none transition-color peer">
                        <label :class="{ 'text-xs':numberPhone ,'-top-[17px]':numberPhone ,'text-purple-600':numberPhone}" class="absolute pointer-events-none left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600">Nomor Handphone</label>
                    </div>
                </div>
                <div class="flex item-center my-5 justify-center">
                    <div class="relative ">
                        <input v-model="bornDate" type="text" class="border-b border-gray-500 py-1 w-[400px] bg-neutral-800 focus:border-purple-600 focus:border-b-2 focus:outline-none transition-color peer">
                        <label :class="{ 'text-xs':bornDate ,'-top-[17px]':bornDate , 'text-purple-600':bornDate}" class="absolute pointer-events-none left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600">Tanggal Lahir (dd-mm-yyyy)</label>
                    </div>
                </div>
                <div class="flex my-7 ">
                    <div @click="changeProvinceActive()" class="border relative border-gray-500 w-[350px] items-center text-center mx-1 rounded-l font-bold flex justify-between focus:border-purple-600 group">
                        <p class="py-2 px-4">{{province ? province?.length > 10 ? province?.substring(0 ,10) + "..." : province : "Provinsi"}}</p>
                        <span class="p-4">
                            <img width="15" src="~/assets/icons/illustratorDd.svg" alt="">
                        </span>
                        <div :class="{ hidden : isProvinceActive}" class="absolute group-focus:block z-10 top-full min-w-full w-[35px] bg-white shadow-md mt-2  rounded">
                            <ul class="text-left z-10 bg-gray-500 border border-gray-500 rounded max-h-52 overflow-y-auto">
                                <li v-for="el in provinceList" @click="choiceProvince(el.name,el.id)" key="el.id" class="px-4 py-1 bg-neutral-800 hover:text-purple-600 border-b border-gray-500">{{ el.name }}</li>
                            </ul>
                        </div>
                    </div>
                    <div @click="changeDistrictActive()" class="border relative max-h-[66px] relative z-10 border-gray-500 w-[350px] items-center text-center mx-1 rounded-l font-bold flex justify-between focus:border-purple-600 group">
                        <p class="py-2 px-4">{{district ? district?.length > 10 ? district?.substring(0 ,10) + "..." : district :"Kabupaten/Kota"}}</p>
                        <span class="p-4">
                            <img width="15" src="~/assets/icons/illustratorDd.svg" alt="">
                        </span>
                        <div :class="{ hidden : isDistrictActive}" class="absolute group-focus:block z-10 top-full min-w-full w-[35px] bg-white shadow-md mt-2  rounded">
                            <ul class="text-left z-10 bg-gray-500 border border-gray-500 rounded max-h-52 overflow-y-auto">
                                <li v-for="el in districtList" @click="choiceDistrict(el.name)" key="el.id" class="px-4 py-1 bg-neutral-800 hover:text-purple-600 border-b border-gray-500">{{ el.name }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex item-center my-5 justify-center">
                    <input
                        class=" float-left mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value=""
                        id="checkboxChecked"/>
                    <label
                        class="inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="checkboxChecked">
                        Saya setuju dengan syarat dan ketentuan yang berlaku
                    </label>
                </div>
                <div class="flex z-0 flex-col items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:justify-center sm:flex-row">
                    <button class="px-8 z-0 py-4 w-[300px] relative text-lg font-medium text-center text-white bg-neutral-900 rounded-md" type="button" @click="useRouter().push({path:'/users'})">
                         Cancel
                        </button>
                    <div class="relative group mt-5">
                        <div class="absolute -inset-1 bg-gradient-to-r from-indigo-600 animate-pulse to-pink-600 rounded-lg blur" />
                        <button class="px-8 z-0 py-4 w-[300px] relative text-lg font-medium text-center text-white bg-neutral-900 rounded-md " type="submit">
                         Register
                        </button>
                    </div>
              </div>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions , mapState} from 'pinia'
import {useUserStore} from '~/stores/userCounter'

export default{
    data() {
        return {
            name:"",
            numberPhone:"",
            bornDate:"",
            province:"",
            district:"",
            isProvinceActive:true,
            isDistrictActive:true,
        }
    },
    computed:{
        ...mapState(useUserStore,['provinceList','districtList']),
    },
    methods: {
        ...mapActions(useUserStore,['fetchProvince','fetchDistrict','addUser']),
        changeProvinceActive(){
            if(this.isProvinceActive){
                return this.isProvinceActive = false
            }
            return this.isProvinceActive = true
        },
        changeDistrictActive(){
            if(this.isDistrictActive){
                return this.isDistrictActive = false
            }
            return this.isDistrictActive = true
        },
        async choiceProvince(data,id){
            await this.fetchDistrict(id)
            this.isProvinceActive = true
            this.province = data
            this.district = ""
        },
        async choiceDistrict(data){
            await this.fetchProvince()
            this.isDistrictActive = true
            this.district = data
        },
        async register(form){
            await this.addUser(form)
        }
    },
    created() {
        this.fetchProvince()
        definePageMeta({
            layout:'users'
        })
    },
}
</script>

<style >

</style>