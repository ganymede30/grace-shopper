const Sequelize = require('sequelize')
const db = require('../db')

const OrderShoes = db.define('OrderShoes', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})

module.exports = OrderShoes
