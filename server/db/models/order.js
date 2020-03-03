const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  date: {
    type: Sequelize.DATE
  },
  paymentStatus: {
    type: Sequelize.BOOLEAN
  },
  shipmentStatus: {
    type: Sequelize.ENUM('Not Shipped', 'En Route', 'Arrived')
  },
  orderStatus: {
    type: Sequelize.BOOLEAN
  },
  confirmationNumber: {
    type: Sequelize.INTEGER
  },
  trackingNumber: {
    type: Sequelize.INTEGER
  }
})

module.exports = Order
