exports.bmi = (req, res) => {
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)
    let bmi = berat / Math.pow(tinggi/100, 2)
    let ket
    
    if (bmi < 18.5) {
        ket = 'Kekurangan berat badan'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        ket = 'Normal (Ideal)'
    } else if (bmi >= 25 && bmi <= 29.9){
        ket = 'Kelebihan berat badan'
    } else {
        ket = 'Kegemukan (Obesitas)'
    }
    
    let response = {
        tinggi: tinggi,
        berat: berat,
        BMI: bmi.toFixed(2),
        Keterangan: ket
    }
    
    return res.json(response)
}