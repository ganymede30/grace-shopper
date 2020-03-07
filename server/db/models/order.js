const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  date: {
    type: Sequelize.DATE
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  paymentStatus: {
    type: Sequelize.BOOLEAN
  },
  shipmentStatus: {
    type: Sequelize.ENUM('Not Shipped', 'En Route', 'Arrived')
  },
  isCart: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  confirmationNumber: {
    type: Sequelize.INTEGER
  },
  trackingNumber: {
    type: Sequelize.INTEGER
  }
})

module.exports = Order
