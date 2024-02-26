const router = require('express').Router()

router.use('/user', require('./user'))
router.use('/accomodation', require('./accomodation'))

module.exports = router