const User = require('./user')
const Shoe = require('./shoe')
const Order = require('./order')
const OrderShoes = require('./OrderShoes')

User.hasMany(Order)
Order.belongsTo(User)

Shoe.belongsToMany(Order, {through: 'OrderShoes'})
Order.belongsToMany(Shoe, {through: 'OrderShoes'})

module.exports = {
  User,
  Shoe,
  Order,
  OrderShoes
}

//custom join table for OrderShoes with quantity and price
