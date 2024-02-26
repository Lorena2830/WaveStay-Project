const User = require('../api/models/user')

const Accomodation = require('../api/models/accomodation')

const Booking = require('../api/models/booking')
//hay que traerse los modelos booking y accomodation


function addRelationsToModels() {
    try {
      
  
      console.log('Relations added to all models')
    } catch (error) {
      throw error
    }
  }
  
  module.exports = addRelationsToModels