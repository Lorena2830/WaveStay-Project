const Booking = require('../models/booking')
const Accommodation = require('../models/accommodation')
const User = require('../models/user')

async function getAllBooking(req, res) { //vamos a optener todas las reservas
	try {
		const bookings = await Booking.findAll()
		if (bookings) {
			return res.status(200).json(bookings)
		} else {
			return res.status(404).send('No bookings found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneBooking(req, res) { //vamos a optener una reserva
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

async function getBookingByAccommodation(req, res) { //vamos a optener una reserva por habitación 
	try {
        const accommodationId = req.params.id
		const booking = await Booking.findAll({
            include: [{
                model: Accommodation,
                where: { id: accommodationId }
            }]
        });
		if (booking) {
			return res.status(200).json(booking)
		} else {
			return res.status(404).send('Booking not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getBookingsByUser(req, res) { //vamos a optener las reservas por usuario
	try {
        const userId = res.locals.user.id
		const booking = await Booking.findAll({
            include: [{
                model: User,
                where: { id: userId }
            }]
        });
		if (booking) {
			return res.status(200).json(booking)
		} else {
			return res.status(404).send('Bookings not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

const createBooking = async (req, res) => {
    try {
      const { startdate, endingdate, status, accommodationId, userId } = req.body;
      const booking = await Booking.create({
        startdate,
        endingdate,
        status,
        accommodationId,
        userId
    });
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

  async function updateBooking(req, res) {
    try {
        const [bookingExist, booking] = await Booking.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (bookingExist !== 0) {
            return res.status(200).json({ message: 'Booking updated', booking:booking })
        } else {
            return res.status(404).send('Booking not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

  async function deleteBooking(req, res) {
    try {
        const booking = await Booking.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (booking) {
            return res.status(200).json('Booking deleted')
        } else {
            return res.status(404).send('Booking not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const removeBookingFromUser = async (req, res) => { //función donde el usuario puede eliminar una reserva
    try {
        const {id}  = req.params;
        const userId = res.locals.user.id
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }
        const booking = await Booking.findByPk(id);
        if (!booking) {
            return res.status(404).send('Booking not found');
        }
        await booking.removeUser(user);
    
        return res.status(200).json({ message: 'Booking removed to  successfully', booking : booking, user: user});
    } catch (error) {
        res.status(500).json({
            message: "Error removing from bookings",
            result: error.message,
        });
    }
};


module.exports = {
	getAllBooking,
	getOneBooking,
    getBookingsByUser,
    createBooking,
	updateBooking,
    getBookingByAccommodation,
	deleteBooking,
    removeBookingFromUser
}
