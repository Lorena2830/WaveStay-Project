const accommodationRouter = require("express").Router();

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
accommodationRouter.get('/fav/:id', getAllAcommodationsFavorites);
accommodationRouter.post('/', createAccommodation);
accommodationRouter.put('/:id', updateAccommodation);
accommodationRouter.put('/add/:id', addOneAccToFavorite);
accommodationRouter.put('/remove/:id', removeFromFavorites);
accommodationRouter.delete('/:id',deleteAccommodation);

module.exports = accommodationRouter;
