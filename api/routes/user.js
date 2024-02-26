const router = require('express').Router()

const { getAllUsers, getOneUser, getOwnProfile, createUser, updateUser, deleteUser } = require('../controllers/user')
//const { checkAuth, checkAdmin } = require('../utils/check')

router.get('/', getAllUsers)
router.get('/profile', getOwnProfile)
router.get('/:id', getOneUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router
