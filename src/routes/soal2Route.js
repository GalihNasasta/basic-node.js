const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true})) 

const soal2Controller = require('../controllers/soal2Controller')

app.get("/celcius/:c", soal2Controller.celcius)
app.get("/fahrenheit/:f", soal2Controller.fahrenheit)
app.get("/kelvin/:k", soal2Controller.kelvin)
app.get("/reamur/:r", soal2Controller.reamur)

module.exports = app