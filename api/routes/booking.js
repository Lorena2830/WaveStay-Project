const router = require('express').Router()

router.use('/booking', require('./booking'))

module.exports = router