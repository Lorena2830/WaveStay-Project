const router = require('express').Router()

router.use('/auth', require('./auth'))
router.use('/user', require('./user'))
router.use('/booking', require('./booking'))
router.use('/accommodation', require('./accommodation'))


module.exports = router