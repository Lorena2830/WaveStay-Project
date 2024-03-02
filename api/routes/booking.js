const router = require('express').Router()

const { getAllBooking, getOneBooking, getBookingByAccommodation, createBooking, updateBooking, deleteBooking } = require('../controllers/booking')

router.get('/', getAllBooking)
router.get('/accommodation/:id', getBookingByAccommodation)
router.get('/:id', getOneBooking)
router.post('/', createBooking)
router.put('/:id', updateBooking)
router.delete('/:id', deleteBooking)

module.exports = router