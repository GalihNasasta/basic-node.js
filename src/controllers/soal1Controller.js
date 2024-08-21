exports.kubus = (req,res) => {
    let sisi = Number(req.body.sisi)
    let v = sisi*sisi*sisi
    let lp = 6 * sisi*sisi
    let response = {
        sisi: sisi,
        volume: v,
        luasPermukaan: lp
    }
    return res.json(response)
}

exports.balok = (req,res) => {
    let p = Number(req.body.panjang)
    let l = Number(req.body.lebar)
    let t = Number(req.body.tinggi)
    let v = p*l*t
    let lp = 2 * (p*l + p*t + l*t)
    let response = {
        panjang: p,
        lebar: l,
        tinggi: t,
        volume: v,
        luasPermukaan: lp
    }
    return res.json(response)
}

exports.tabung = (req,res) => {
    let r = Number(req.body.rusuk)
    let t = Number(req.body.tinggi)
    let v = Math.PI * r*r * t
    let lp = 2 * Math.PI * r * (r + t)
    let response = {
        rusuk: r,
        tinggi: t,
        volume: v,
        luasPermukaan: lp
    }
    return res.json(response)
}

exports.bola = (req,res) => {
    let r = Number(req.body.rusuk)
    let v = 4/3 * Math.PI * r*r*r
    let lp = 4 * Math.PI * r*r 
    let response = {
        rusuk: r,
        volume: v,
        luasPermukaan: lp
    }
    return res.json(response)
}