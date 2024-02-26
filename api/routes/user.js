const router = require('express').Router()

const { getAllUsers, getOneUser, getOwnProfile, createUser, updateUser, deleteUser } = require('../controllers/user')

router.get('/', getAllUsers)
router.get('/profile', getOwnProfile) //mirar por qué no funciona
router.get('/:id', getOneUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router