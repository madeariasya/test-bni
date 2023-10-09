import {defineStore} from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useUserStore = defineStore('user', {
    state: () => {
      return {
        userList: [] ,
        provinceList: [],
        districtList: [],
      }
    },
    actions: {
        // since we rely on `this`, we cannot use an arrow function
        async fetchUser(query){
            try {
                if(query){
                    const {data : users} = await useFetch('http://localhost:3000/users?nomorHp='+ query)
                    this.userList = users.value
                }else{
                    const {data : users} = await useFetch('http://localhost:3000/users')
                    this.userList = users.value
                }
            } catch (error) {
                console.log(error);
            }
        },
        async addUser(formData){
            try {
               await axios('http://localhost:3000/register',{
                    method:'post',
                    data:{
                        name: formData.name,
                        numberPhone:  formData.numberPhone,
                        bornDate:  formData.bornDate,
                        province:  formData.province,
                        district:  formData.district
                    }
                })
                useRouter().push({path:'/users'})
            } catch (error) {
                const {message,statusCode} = error.response.data
                    Swal.fire({
                    icon: 'error',
                    title: statusCode,
                    text: message,
                })
            }
        },
        async fetchDistrict(id){
            try {
                const {data} = await useFetch('http://localhost:3000/province/' + id)
                this.districtList = data.value
            } catch (error) {
                console.log(error);
            }
        },
        async fetchProvince(){
            try {
                const {data } = await useFetch('http://localhost:3000/province')
                this.provinceList = data.value
                
            } catch (error) {
                console.log(error);
            }
        },
      },
  })
  
