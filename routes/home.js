const express = require ('express')
const { leerUrls, agregarURrl, eliminarURrl, editarURrlform, editarURrl } = require('../controllers/homeControllers');
const validarUrl = require('../middlewares/urlValidar');
const router = express.Router()

router.get('/', leerUrls)
router.post('/',validarUrl ,agregarURrl)
router.get('/eliminar/:id',eliminarURrl)
router.get('/editar/:id',editarURrlform)
router.post('/editar/:id',validarUrl, editarURrl)


module.exports = router