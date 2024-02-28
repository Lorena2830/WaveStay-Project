const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/dbindex')

const Accommodation = sequelize.define(
    'accommodation',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
      },
      bedrooms: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
      imageUrl: {
        type: DataTypes.STRING,
      }
    },
    { timestamps: false }
);

module.exports = Accommodation;
