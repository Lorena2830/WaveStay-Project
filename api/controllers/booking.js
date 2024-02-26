const Booking= require('../models/booking')

async function getAllBooking(req, res) { //vamos a optener todos los usuarios
	try {
		const bookings = await User.findAll()
		if (bookings) {
			return res.status(200).json(bookings)
		} else {
			return res.status(404).send('No bookings found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneBooking(req, res) { //vamos a optener un usuario
	try {
		const booking = await Booking.findByPk(req.params.id)
		if (booking) {
			return res.status(200).json(booking)
		} else {
			return res.status(404).send('Booking not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

const createBooking = async (req, res) => {
    try {
      const booking = await Booking.create(req.body)
  
      res.status(200).json({
        message: "Booking created",
        result: booking
      });
    } catch (error) {
      res.status(500).json({
        message: "Error creating booking",
        result: error,
      })
    }
  }


module.exports = {
	getAllBooking,
	getOneBooking,
    createBooking
}
