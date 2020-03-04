const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const {Shoe} = require('../db/models')
const {Op} = require('sequelize')

const calculateOrderAmount = products => {
  let total = 0
  products.forEach(product => {
    if (!product.price) {
      throw new Error('Product is missing a price')
    } else if (!product.quantity) {
      throw new Error('Product is missing a quantity')
    } else {
      total += product.price * product.quantity
    }
  })
  return total
}

router.post('/create-payment-intent', async (req, res, next) => {
  // Each item must have an id and quantity
  const {items} = req.body

  // Get the product id from items in the request
  const productIds = items.map(item => {
    return {id: item.id}
  })

  // Fetch corresponding products from the database
  const products = await Shoe.findAll({
    attributes: ['id', 'price'],
    where: {
      [Op.or]: productIds
    }
  })

  // Store the prices in a hash map
  const priceMap = {}
  products.forEach(product => {
    priceMap[product.id] = product.price
  })

  // Add the price to the item => (id, quantity, price)
  const pricedItems = items.map(item => {
    return {...item, price: priceMap[item.id]}
  })

  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(pricedItems),
      currency: 'USD'
    })

    // Send publishable key and PaymentIntent details to client
    res.send({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      clientSecret: paymentIntent.client_secret
    })
  } catch (e) {
    next(e)
  }
})

module.exports = router
