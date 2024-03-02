const User = require('../api/models/user')
const Accommodation = require('../api/models/accommodation')
const Booking = require('../api/models/booking')
const { sequelize } = require('../database/dbindex')

function addRelationsToModels() {
  try {
    User.hasMany(sequelize.models.booking, { foreignKey: 'userId'})
    Booking.belongsTo(sequelize.models.user, {foreignKey: 'userId'})

    Accommodation.hasMany(sequelize.models.booking, { foreignKey: 'accommodationId'})
    Booking.belongsTo(sequelize.models.accommodation, {foreignKey: 'accommodationId'})

    User.belongsToMany(Accommodation, {through: 'User_Accommodation'}) //relación de favoritos
    Accommodation.belongsToMany(User, {through: 'User_Accommodation'})

    console.log('Relations added to all models')
  } catch (error) {
    throw error
  }
}
module.exports = addRelationsToModels