const router = require('express').Router()

const { getAllBooking, getOneBooking, createBooking, updateBooking, deleteBooking } = require('../controllers/booking')

router.get('/', getAllBooking)
router.get('/:id', getOneBooking)
router.post('/', createBooking)
router.put('/:id', updateBooking)
router.delete('/:id', deleteBooking)

module.exports = router