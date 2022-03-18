const Url = require('../models/Url')

const leerUrls = async  (req, res) =>{
    try {
        const urls = await Url.find().lean()
        // console.log(urls)
        res.render('home', { urls, })
    }catch (error) {
        console.log('Fallo la lectura de URL')
        res.send('Algo fallo al leer db')
    }

}

const agregarURrl = async (req, res) =>{
    console.log(req.body)
    const {origin} = req.body
    const {nanoid} = require('nanoid')

    try {
        const url =  new Url({origin, shortUrl: nanoid(10)})

        console.log(url)
        await url.save()
        res.redirect('/')
    }
    catch (error) {
        console.log(error)
        res.send("algo fallo al agregar url")
    }
}
const eliminarURrl = async (req, res) =>{
    const {id} = req.params
    try {
        await Url.findByIdAndDelete(id)
        res.redirect('/')

    } catch (error) {
        console.log(error)
        res.send("algo fallo al eliminar")
    }
}

const editarURrlform = async (req, res) =>{
    const {id} = req.params
    try {
        const url = await Url.findById(id).lean()
        res.render('home', {url})
        console.log(url)
        // res.redirect('/')

    } catch (error) {
        console.log(error)
        res.send("algo fallo al editar")
    }
}
const editarURrl = async (req, res) =>{
    const {id} = req.params
    const {origin} = req.body

    try {
        await Url.findByIdAndUpdate(id, {origin: origin})
        res.redirect('/')
    } catch (error) {
        console.log(error)
        res.send("algo fallo al editar")
    }
}

module.exports = {
    leerUrls,
    agregarURrl,
    editarURrlform,
    eliminarURrl,
    editarURrl,
}