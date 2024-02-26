const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const User = sequelize.define(
    'user',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('user', 'admin'), //más adelante puede añadirse owner
        defaultValue: 'user'
      },
    },
    { timestamps: false }
  )
  
  module.exports = User