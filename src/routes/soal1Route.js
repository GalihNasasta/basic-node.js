const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const soal1Controller = require('../controllers/soal1Controller')

app.post("/kubus", soal1Controller.kubus)
app.post("/balok", soal1Controller.balok)
app.post("/tabung", soal1Controller.tabung)
app.post("/bola", soal1Controller.bola)

module.exports = app