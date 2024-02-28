const router = require('express').Router()

const { getAllUsers, getOneUser, getOwnProfile, createUser, updateUser, deleteUser } = require('../controllers/user')
const { checkAuth, checkAdmin } = require('../utils/check')

router.get('/', checkAuth, checkAdmin, getAllUsers)
router.get('/profile', checkAuth, getOwnProfile)
router.get('/:id', checkAuth, checkAdmin, getOneUser)
router.post('/', /* checkAuth, checkAdmin, */ createUser)
router.put('/:id', checkAuth, checkAdmin, updateUser)
router.delete('/:id', checkAuth, checkAdmin, deleteUser)

module.exports = router
