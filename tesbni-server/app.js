const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')
const UserController = require('./controllers/UserController')
const ProvinceController = require('./controllers/ProvinceController')

app.use(cors())
    .use(express.json())
    .use(express.urlencoded({extended:true}))
    .get('/users',UserController.fetchUser)
    .post('/register',UserController.register)
    .get('/province', ProvinceController.fetchProvinceApi)
    .get('/province/:id', ProvinceController.fetchDistrictApi)
    .use(errorHandler)
    .listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})