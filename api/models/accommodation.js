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
      description_large: {
        type: DataTypes.TEXT,
      },
      description_short: {
        type: DataTypes.STRING,
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
      imageUrl1: {
        type: DataTypes.STRING,
      },
      imageUrl2: {
        type: DataTypes.STRING,
      }
    },
    { timestamps: false }
);

module.exports = Accommodation;
