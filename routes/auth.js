const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    res.render('login');
}) 
router.get('/logup', (req, res) => {
    res.render('logup');
})
router.get('/logout', (req, res) => {
    res.render('logout');
})

module.exports = router;