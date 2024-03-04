const router = require('express').Router()

const {checkAuth} = require ('../utils/check.js')
const { getAllBooking, getOneBooking, getBookingByAccommodation, getBookingsByUser, createBooking, updateBooking, deleteBooking, removeBookingFromUser } = require('../controllers/booking')

router.get('/', getAllBooking)
router.get('/accommodation/:id', getBookingByAccommodation)
router.get('/user/:id', getBookingsByUser)
router.get('/:id', getOneBooking)
router.post('/', createBooking)
router.put('/:id', updateBooking)
router.delete('/remove/:id', checkAuth, removeBookingFromUser)
router.delete('/:id', deleteBooking)

module.exports = router