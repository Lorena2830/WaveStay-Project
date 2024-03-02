const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/dbindex')

const Booking = sequelize.define(
  'booking',
  {
    startdate: {
      type: DataTypes.DATE,
      allowNull: false, //no puede estar vacio
    },
    endingdate: {
      type: DataTypes.DATE,
      allowNull: false, //no puede estar vacio
    },
    status: {
      type: DataTypes.ENUM('Pendiente', 'Cancelada', 'Aceptada'),
      defaultValue: 'Pendiente'
    },
    accommodationId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'accommodation',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    timestamps: false //no queremos fecha de creacion ni modificacion
  }
);

module.exports = Booking