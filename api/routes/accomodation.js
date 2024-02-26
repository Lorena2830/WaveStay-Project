const accomodationRouter = require("express").Router();

const { 
  getAllAcomodations, 
  getAccomodationById, 
  createAccomodation, 
  updateAccomodation, 
  addOneAccToFavorite, 
  removeFromFavorites,
  deleteAccomodation 
} = require("../controllers/accomodation")

accomodationRouter.get('/', getAllAcomodations);
accomodationRouter.get('/:id', getAccomodationById);
accomodationRouter.post('/', createAccomodation);
accomodationRouter.put('/:id', updateAccomodation);
accomodationRouter.post('/:id/favorite', addOneAccToFavorite);
accomodationRouter.delete('/:id/favorite', removeFromFavorites);
accomodationRouter.delete('/:id',deleteAccomodation);

module.exports = accomodationRouter;
