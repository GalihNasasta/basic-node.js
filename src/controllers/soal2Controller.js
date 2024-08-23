exports.celcius = (req,res) => {
    let c = Number(req.params.c) 
    let f = 9/5 * c + 32 
    let k = c + 273 
    let r = 4/5 * c 
    let response = { 
        celcius: c, 
        fahrenheit: f, 
        kelvin: k, 
        reamur: r 
    } 
    return res.json(response)
}

exports.fahrenheit = (req,res) => {
    let f = Number(req.params.f)
    let c = 5/9 * (f - 32)
    let k = 5/9 * (f - 32) + 273
    let r = 4/9 * (f - 32)
    let response = { 
        fahrenheit: f, 
        celcius: c, 
        kelvin: k, 
        reamur: r 
    } 
    return res.json(response)
}

exports.kelvin = (req,res) => {
    let k = Number(req.params.k) 
    let c =  k - 273
    let f = 9/5 * (k - 273) + 32
    let r = 4/5 * (k - 273) 
    let response = { 
        kelvin: k, 
        celcius: c, 
        fahrenheit: f, 
        reamur: r 
    } 
    return res.json(response)
}

exports.reamur = (req,res) => {
    let r = Number(req.params.r)
    let c =  5/4 * r
    let f =  9/4 * r + 32
    let k =  5/4 * r + 273
    let response = { 
        reamur: r,
        celcius: c, 
        fahrenheit: f, 
        kelvin: k 
    } 
    return res.json(response)
}