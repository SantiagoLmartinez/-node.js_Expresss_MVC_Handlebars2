const express = require ('express')
const router = express.Router()

router.get('/', (req, res) =>{
    const urls = [
        { origin: "www.google.com/holi1", shortURL: "urlcorta1" },
        { origin: "www.google.com/holi2", shortURL: "urlcorta2" },
        { origin: "www.google.com/holi3", shortURL: "urlcorta3" },
    ]
    res.render('home', { urls: urls });
})


module.exports = router