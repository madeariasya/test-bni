const axios = require('axios')

class ProvinceController {
    static async fetchProvinceApi(req,res,next){
        try {
            const {data} = await axios.get('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async fetchDistrictApi(req,res,next){
        try {
            const {id} = req.params
            const {data} = await axios.get(`http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ProvinceController