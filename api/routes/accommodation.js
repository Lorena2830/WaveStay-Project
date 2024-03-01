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
accommodationRouter.get('/fav/:id',checkAuth, getAllAcommodationsFavorites);
accommodationRouter.get('/:id', getAccommodationById);
accommodationRouter.post('/', createAccommodation);
accommodationRouter.put('/add/:id', checkAuth, addOneAccToFavorite);
accommodationRouter.put('/remove/:id', removeFromFavorites);
accommodationRouter.put('/:id', updateAccommodation);
accommodationRouter.delete('/:id',deleteAccommodation);

module.exports = accommodationRouter;
