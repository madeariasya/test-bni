const HttpError = require('../helpers/error');
const {user} = require('../models/index');
const {Op} = require('sequelize')

class UserController {
    static async fetchUser (req,res,next){
        try {
            const {nomorHp} = req.query
            if(nomorHp){
                const data = await user.findAll({where:{
                    numberPhone:{
                        [Op.iLike]:`%${nomorHp}%`
                    }
                }})
                const newData = data.map(el => {
                    return {
                        name : el.name,
                        numberPhone : el.numberPhone,
                        bornDate : el.bornDate,
                        province : el.province,
                        district : el.district,
                    }
                })
                res.status(200).json(newData)
            }else{
                const data = await user.findAll()
                const newData = data.map(el => {
                    return {
                        name : el.name,
                        numberPhone : el.numberPhone,
                        bornDate : el.bornDate,
                        province : el.province,
                        district : el.district,
                    }
                })
                res.status(200).json(newData)
            }
        } catch (error) {
            next(error)
        }
    }
    static async register(req,res,next){
        try {
            const {name, numberPhone , bornDate , province , district} = req.body
            console.log(name, numberPhone , bornDate , province , district,'xixiix');
            if(!name) throw new HttpError(400 , 'Nama tidak boleh kosong!')
            if(!numberPhone) throw new HttpError(400 , 'Nomor Handphone tidak boleh kosong!')
            if(!bornDate) throw new HttpError(400 , 'Tanggal Lahir tidak boleh kosong!')
            if(!province) throw new HttpError(400 , 'Provinsi tidak boleh kosong!')
            if(!district) throw new HttpError(400 , 'Kota tidak boleh kosong!')
            await user.create({
                name,
                numberPhone,
                bornDate,
                province,
                district
            })
            res.status(200).json({
                message: 'Register Successfully'
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController