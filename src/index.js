const express = require("express") //memanggil library express.js
const cors = require("cors") // memanggil library cors 
const app = express()
 
app.use(cors()) // penggunaan cors agar end point dapat diakses oleh cross platform 

//import routes
const praktikum = require('./routes/praktikumRoute')
const soal1 = require('./routes/soal1Route')
const soal2 = require('./routes/soal2Route')
const soal3 = require('./routes/soal3Route')
const soal4 = require('./routes/soal4Route')

//implementasi routes
app.use('/praktikum', praktikum)
app.use('/soal1', soal1)
app.use('/soal2', soal2)
app.use('/soal3', soal3)
app.use('/soal4', soal4)

// endpoint "/test" dengan method GET 
app.get("/test", (req,res) => {
    // membuat objek yang berisi data yang akan dijadikan response 
    let response = { 
    message: "Ini end-point pertama ku", 
    method: req.method, 
    code: res.statusCode 
    } 
 
    res.json(response) // memberikan response dengan format JSON yang berisi objek di atas
    })

    // menjalankan server pada port 8000 
app.listen(8000, () => { 
    console.log("Server run on port 8000"); 
    })  