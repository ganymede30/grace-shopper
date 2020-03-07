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
    // console.log('The OrderId:', order.id)
    // console.log('The ShoeId:', shoe.id)
    order.addShoe(shoe)
    console.log(shoe)

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
    const theUser = await Order.findAll({where: {userId}, include: [Shoe]})
    // console.log(theUser, 'THE USER WITH ORDER')
    res.json(theUser)
  } catch (error) {
    next(error)
  }
})

// GET one order for one user
router.get('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    // find the order that matches the userId and its the cart. include shoes.
    const findOne = await Order.findAll({
      where: {userId: userId, isCart: true},
      include: [Shoe]
    })
    // const find = await User.
    console.log('User Id:', req.user.id)
    res.json(findOne[0])
  } catch (error) {
    next(error)
  }
})

// POST one order for one user
// router.post('/:id/orders', async (req, res, next) => {
//   try {
//     const order = await Order.create(req.body)
//     const userId = req.user.id
//     order.setUser(User[userId])
//     res.json(order)
//   } catch (error) {
//     next(error)
//   }
// })
