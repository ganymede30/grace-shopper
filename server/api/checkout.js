const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const {Order, Shoe, OrderShoes} = require('../db/models')
const {Op} = require('sequelize')

router.post('/', async (req, res, next) => {
  if (!req.user) {
    const err = new Error('You must be logged in to complete your order')
    err.status = 404
    return next(err)
  } else {
    const order = await Order.findOne({
      where: {userId: +req.user.id, isCart: true},
      include: [Shoe]
    })
    if (order) {
      // TODO: Stripe charge

      const shoeIds = order.shoes.map(shoe => {
        return shoe.id
      })
      // Find the quantities
      const results = await OrderShoes.findAll({
        where: {shoeId: {[Op.or]: shoeIds}, orderId: order.id}
      })

      // Shoe Id => Quantity
      const quantityMap = {}
      results.forEach(result => {
        quantityMap[result.shoeId] = result.quantity
      })

      let totalPrice = 0
      order.shoes.forEach(shoe => {
        totalPrice += shoe.price * 100 * quantityMap[shoe.id]
      })

      // Add price and shipping details to order
      order.totalPrice = totalPrice
      order.isCart = false
      order.shippingName = req.body.shippingName
      order.shippingAddress = req.body.shippingAddress
      await order.save()

      return res.sendStatus(200)
    }
    const err = new Error('No active cart')
    err.status = 404
    return res.next(err)
  }
})

module.exports = router
