<template>
  <div class="w-[1000px] container mx-auto">
    <div class=" mb-5">
      <form action="" @keydown.enter.prevent="fetchUser(numberPhone)">
        <div class="relative flex items-center ">
          <img src="../../assets/icons/iconSearch.svg" class="w-5 h-5 ml-3 absolute pointer-events-none" alt="">
          <input type="text" placeholder="Cari Nomor Handphone" autocomplete="off" v-model="numberPhone"
            class="pr-3 pl-10 px-3 py-2 font-semibold w-full placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-600 focus:ring-2"
          >
        </div>
      </form>
    </div>
    <div class="table w-full ">
      <div class="table-header-group">
        <div
          class="table-row h-[49px] place-items-center bg-gray-600 shadow table-text-head"
        >
          <div class="table-cell py-[18px] px-3 text-pink-500 text-left">Nama</div>
          <div class="table-cell py-[18px] px-3 text-violet-300 text-left">Nomor Handphone</div>
          <div class="table-cell py-[18px] px-3 text-pink-500 text-left">Tanggal Lahir</div>
          <div class="table-cell py-[18px] px-3 text-violet-300 text-left">Provinsi</div>
          <div class="table-cell py-[18px] px-3 text-pink-500 text-left">Kabupaten / Kota</div>
        </div>
      </div>
      <div class="table-row-group " v-for="user in userList" key="user.id">
        <div class="table-row h-[49px] place-items-center bg-white shadow">
          <div class="table-cell py-[18px] px-3 text-zinc-500 text-xs font-normal">
            {{user.name}}
          </div>
          <div class="table-cell py-[18px] px-3 text-stone-600 text-xs font-medium">
            {{user.numberPhone}}
          </div>
          <div class="table-cell py-[18px] px-3 text-zinc-500 text-xs font-normal">
            {{user.bornDate}}
          </div>
          <div class="table-cell py-[18px] px-3 text-stone-600 text-xs font-medium">
            {{user.province}}
          </div>
          <div class="table-cell py-[18px] px-3 text-zinc-500 text-xs font-medium">
            {{user.district}}
          </div>
        </div>
      </div>
    </div>
    <div v-if="userList.length === 0" class="bg-white w-full h-[100px] py-[40px] text-center">
        <p>User Not Found!</p>
      </div>
  </div>
</template>

<script>
import {mapActions , mapState} from 'pinia'
import {useUserStore} from '../stores/userCounter'

export default{
  data() {
    return {
      numberPhone:'',
    }
  },
  computed: {
    ...mapState(useUserStore,['userList'])
  },
  methods: {
    ...mapActions(useUserStore,['fetchUser']),
    async searchUserByPhone(numberPhone){
      await this.fetchUser(numberPhone)
    }
  },
  created() {
    this.fetchUser()
    definePageMeta({
        layout:'users'
    })
  },
}
</script>

<style></style>
