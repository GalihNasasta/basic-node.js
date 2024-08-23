const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const soal4Controller = require('../controllers/soal4Controller')

app.post('/bmi', soal4Controller.bmi)

module.exports = app