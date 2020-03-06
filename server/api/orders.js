const router = require('express').Router()
const {User, Shoe, Order} = require('../db/models')
//const Shoe = require('../db/models/shoe')
module.exports = router

// router.get('/', (req, res, next) => {
//   // find all
//   try {
//     res.json(req.session.cart)
//   } catch (error) {
//     next(error)
//   }
// })

//This is for a logged in user
router.post('/', async (req, res, next) => {
  try {
    const [order] = await Order.findOrCreate({
      where: {userId: req.user.id, isCart: true}
    })

    const shoe = await Shoe.findByPk(req.body.id)
    console.log('The OrderId:', order.id)
    console.log('The ShoeId:', shoe.id)
    order.addShoe(shoe)

    res.json(order)
  } catch (error) {
    next(error)
  }
})
// get request to fetch on the first time

// GET all orders for one user
router.get('/:id/orders', async (req, res, next) => {
  try {
    const userId = req.params.id
    const theUser = await Order.findAll({where: {userId}})
    console.log(theUser, 'THE USER WITH ORDER')
    res.json(theUser)
  } catch (error) {
    next(error)
  }
})

// GET one order for one user
router.get('/:id/orders/:orderId', async (req, res, next) => {
  try {
    const orderId = req.params.id
    const findOne = await Order.findByPk(orderId)
    console.log('User Id:', req.user.id)
    res.json(findOne)
  } catch (error) {
    next(error)
  }
})

// POST one order for one user
router.post('/:id/orders', async (req, res, next) => {
  try {
    const order = await Order.create(req.body)
    const userId = req.user.id
    order.setUser(User[userId])
    res.json(order)
  } catch (error) {
    next(error)
  }
})
