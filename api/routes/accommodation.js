const accommodationRouter = require("express").Router();
const { checkAuth } = require ("../utils/check")
const { 
  getAllAcommodations, 
  getAccommodationById, 
  createAccommodation, 
  updateAccommodation, 
  addOneAccToFavorite,
  getAllAcommodationsFavorites, 
  removeFromFavorites,
  deleteAccommodation 
} = require("../controllers/accommodation")

accommodationRouter.get('/', getAllAcommodations);
accommodationRouter.get('/:id', getAccommodationById);
accommodationRouter.get('/fav/:id',checkAuth, getAllAcommodationsFavorites);
accommodationRouter.post('/', createAccommodation);
accommodationRouter.put('/:id', updateAccommodation);
accommodationRouter.put('/add/:id', checkAuth, addOneAccToFavorite);
accommodationRouter.put('/remove/:id', removeFromFavorites);
accommodationRouter.delete('/:id',deleteAccommodation);

module.exports = accommodationRouter;
