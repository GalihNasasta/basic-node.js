const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true})) 

const praktikumController = require('../controllers/praktikumController')

app.get("/profil/:name/:age", praktikumController.profil)
app.post("/bujur_sangkar", praktikumController.bujur_sangkar)

module.exports = app