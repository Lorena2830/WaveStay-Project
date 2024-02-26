const Accomodation= require('../models/accomodation')
const User= require('../models/user')

const getAllAcomodations = async (req, res) => {
    try {
        const accomodations = await Accomodation.findAll({
            where: req.query
        });

        res.status(200).json({
            message: "Get All accomodations succesful",
            result: accomodations,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error getting all accomodations",
            result: error,
        });
    }
};

const getAccomodationById = async (req, res) => {
    try {
      const accomodation = await Accomodation.findByPk(req.params.id,{
      })
  
      res.status(200).json({
        message: "Get accomodation succesful",
        result: accomodation,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error getting one accomodation",
        result: error.message,
      });
    }
  };

  const createAccomodation = async (req, res) => { // para owner y admin
    try {
        const { name, address, description, price, rating, imageUrl } = req.body;

        const newAccomodation = await Accomodation.create({
            name,
            address,
            description,
            price,
            rating,
            imageUrl,
        });

        res.status(201).json({
            message: "Accomodation created successfully",
            result: newAccomodation,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating accomodation",
            result: error.message,
        });
    }
  };

const updateAccomodation = async (req, res) => { // para owner y admin
    try {
        const { name, address, description, price, rating, imageUrl } = req.body;

        const accomodation = await Accomodation.findByPk(req.params.id);
        if (!accomodation) {
            return res.status(404).json({
                message: "Accomodation not found",
                result: "No accomodation found",
            });
        }

        await accomodation.update({
            name,
            address,
            description,
            price,
            rating,
            imageUrl,
        });

        res.status(200).json({
            message: "Accomodation updated successfully",
            result: accomodation,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating accomodation",
            result: error.message,
        });
    }
};

const addOneAccToFavorite = async (req, res) => { 
    try {
        const user = await User.findByPk(res.locals.user.id)

        const accomodation = await Accomodation.findByPk(req.params.id)

        await user.addAccomodation(accomodation)

        res.status(200).json({
            message: "Accomodation added",
            result: accomodation,
        });

    } catch (error) {
        res.status(500).json({
            message: "Error creating favorite",
            result: error,
        });
    }
};

const removeFromFavorites = async (req, res) => {
    try {
        const favoriteItemId = req.params.id;

        await req.user.removeFavorite(favoriteItemId);

        res.status(200).json({
            message: "Removed from favorites successfully",
            result: { itemId: favoriteItemId },
        });

    } catch (error) {
        res.status(500).json({
            message: "Error removing from favorites",
            result: error.message,
        });
    }
};

const deleteAccomodation = async (req, res) => {
    try {
        const accomodation = await Accomodation.findByPk(req.params.id);

        if (!accomodation) {
            return res.status(404).json({
                message: "Accomodation not found",
                result: "No accomodation found",
            });
        }

        await accomodation.destroy();
        res.status(200).json({
            message: "Accomodation deleted successfully",
            result: { id: req.params.id },
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting accomodation",
            result: error.message,
        });
    }
}
module.exports = {
    getAllAcomodations,
    getAccomodationById,
    createAccomodation,
    updateAccomodation,
    addOneAccToFavorite,
    removeFromFavorites,
    deleteAccomodation,
}

