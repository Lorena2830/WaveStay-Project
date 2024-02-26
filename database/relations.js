const User = require('../api/models/user')
const Accommodation = require('../api/models/accommodation')
const Booking = require('../api/models/booking')

function addRelationsToModels() {
  try {
    User.hasMany(Booking)
    Booking.belongsTo(User)

    Accommodation.hasMany(Booking)
    Booking.belongsTo(Accommodation)

    User.belongsToMany(Accommodation, {through: 'User_Accommodation'}) //relación de favoritos
    Accommodation.belongsToMany(User, {through: 'User_Accommodation'})

    console.log('Relations added to all models')
  } catch (error) {
    throw error
  }
}
module.exports = addRelationsToModels