const Accommodation = require('../models/accommodation')
const Booking = require('../models/booking')
const User = require('../models/user')

const getAllAcommodations = async (req, res) => {
    try {
        const accommodations = await Accommodation.findAll({
            where: req.query
        });

        res.status(200).json({
            message: "Get All accommodations succesful",
            result: accommodations,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error getting all accommodations",
            result: error,
        });
    }
};

const getAccommodationById = async (req, res) => {
    try {
        const accommodation = await Accommodation.findByPk(req.params.id, {
            include: Booking
        })

        res.status(200).json({
            message: "Get accommodation succesful",
            result: accommodation,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error getting one accommodation",
            result: error.message,
        });
    }
};

const createAccommodation = async (req, res) => { // para owner y admin
    try {
        const { name, address, description_large, description_short, price, rating, imageUrl, imageUrl1, imageUrl2 } = req.body;

        const newAccommodation = await Accommodation.create({
            name,
            address,
            description,
            description_large, 
            description_short,
            price,
            rating,
            bedrooms,
            imageUrl,
            imageUrl1,
            imageUrl2
        });

        res.status(201).json({
            message: "Accommodation created successfully",
            result: newAccommodation,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating accommodation",
            result: error.message,
        });
    }
};

const updateAccommodation = async (req, res) => { // para owner y admin
    try {
        const { name, address, description_large, description_short, price, rating, imageUrl, imageUrl1, imageUrl2 } = req.body;

        const accommodation = await Accommodation.findByPk(req.params.id);
        if (!accommodation) {
            return res.status(404).json({
                message: "Accommodation not found",
                result: "No accommodation found",
            });
        }
        await accommodation.update({
            name,
            address,
            description,
            description_large, 
            description_short,
            price,
            rating,
            bedrooms,
            imageUrl,
            imageUrl1,
            imageUrl2
        });

        res.status(200).json({
            message: "Accommodation updated successfully",
            result: accommodation,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating accommodation",
            result: error.message,
        });
    }
};

const addOneAccToFavorite = async (req, res) => { //función donde el usuario puede añadir un alojamiento a favoritos
    try {
        const { userId, accommodationId } = req.body;
        const user = await User.findByPk(userId)
        if (!user) {
            return res.status(404).json({
              message: "User not found",
            });
          }
        const accommodation = await Accommodation.findByPk(accommodationId)
        if (!accommodation) {
            return res.status(404).json({
              message: "Accommodation not found",
            });
          }
        await user.addAccommodation(accommodation)

        res.status(200).json({
            message: "Accommodation added",
            result: accommodation,
        });

    } catch (error) {
        res.status(500).json({
            message: "Error creating favorite",
            result: error.message,
        });
    }
};

const getAllAcommodationsFavorites = async (req, res) => {  
    try {
        const userId = req.params.userId;
        const accommodations = await Accommodation.findAll({
            include: {
                model: User,
                where: { id: userId },
                through: { where: { isFavorite: true } }
            }
        });
        res.status(200).json({
            message: "Get All accommodations favorites",
            result: accommodations,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error getting accommodations favorites",
            result: error,
        });
    }
};

const removeFromFavorites = async (req, res) => { //función donde el usuario puede eliminar un alojamiento de favoritos
    try {
        const { userId, accommodationId } = req.body;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }
        const accommodation = await Accommodation.findByPk(accommodationId);
        if (!accommodation) {
            return res.status(404).send('Accommodation not found');
        }
        await accommodation.removeUser(user);
    
        return res.status(200).json({ message: 'User removed to  successfully', accommodation : accommodation, user: user});
    } catch (error) {
        res.status(500).json({
            message: "Error removing from favorites",
            result: error.message,
        });
    }
};

const deleteAccommodation = async (req, res) => {
    try {
        const accommodation = await Accommodation.findByPk(req.params.id);

        if (!accommodation) {
            return res.status(404).json({
                message: "Accommodation not found",
                result: "No accommodation found",
            });
        }

        await accommodation.destroy();
        res.status(200).json({
            message: "Accommodation deleted successfully",
            result: { id: req.params.id },
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting accommodation",
            result: error.message,
        });
    }
}
module.exports = {
    getAllAcommodations,
    getAccommodationById,
    createAccommodation,
    updateAccommodation,
    addOneAccToFavorite,
    getAllAcommodationsFavorites,
    removeFromFavorites,
    deleteAccommodation,
}

