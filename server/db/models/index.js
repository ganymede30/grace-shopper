const User = require('./user')
const Shoe = require('./shoe')
const Order = require('./order')

User.hasMany(Order)
Order.belongsTo(User)

Shoe.belongsToMany(Order, {through: 'OrderShoes'})
Order.belongsToMany(Shoe, {through: 'OrderShoes'})

module.exports = {
  User,
  Shoe,
  Order
}
