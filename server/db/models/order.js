const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  totalPrice: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  isCart: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  shippingAddress: {
    type: Sequelize.STRING
  },
  shippingName: {
    type: Sequelize.STRING
  }
})

module.exports = Order
