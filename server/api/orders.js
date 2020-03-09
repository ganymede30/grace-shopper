const router = require('express').Router()
const {User, Shoe, Order, OrderShoes} = require('../db/models')
const {isAdminOrUser, isAdmin} = require('../adminMiddleware')
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
    order.addShoe(shoe)
    res.json(order)
  } catch (error) {
    next(error)
  }
})

router.put('/:method/:shoeId/:orderId/', async (req, res, next) => {
  try {
    const {method, shoeId, orderId} = req.params
    const shoe = await Shoe.findByPk(shoeId)
    const order = await Order.findByPk(orderId)
    const orderShoes = await OrderShoes.findOne({
      where: {shoeId: shoe.id, orderId: orderId}
    })
    // console.log(Object.keys(shoe.__proto__), 'MAGIC METHODS')

    switch (method) {
      case 'increment':
        await orderShoes.update({quantity: orderShoes.quantity + 1})
        res.json(shoe)
        break
      case 'decrement':
        if (orderShoes.quantity > 1)
          await orderShoes.update({quantity: orderShoes.quantity - 1})
        else await order.removeShoe(shoe)
        res.json(shoe)
        break
      case 'remove':
        await order.removeShoe(shoe)
        res.json(shoe)
        break
      default:
        res.json(shoe)
    }
  } catch (error) {
    console.error(error)
  }
})

router.get('/userCart', async (req, res, next) => {
  try {
    if (!req.user) {
      console.error('GUEST CART')
      return
    }
    const user = await User.findByPk(req.user.id)
    const findCart = await Order.findOne({
      where: {userId: user.id, isCart: true},
      include: [Shoe]
    })

    findCart.isCart === true ? res.json(findCart) : res.json({shoes: []})
  } catch (error) {
    console.error(error)
  }
})

// GET all orders for one user
router.get('/:id/orders', async (req, res, next) => {
  try {
    const userId = req.params.id
    const theUser = await Order.findAll({where: {userId}, include: [Shoe]})
    res.json(theUser)
  } catch (error) {
    next(error)
  }
})

// GET one order for one user
// router.get('/:id', async (req, res, next) => {
//   try {
//     const userId = req.params.id
//     // find the order that matches the userId and its the cart. include shoes.
//     const findOne = await Order.findAll({
//       where: { userId: userId, isCart: true },
//       include: [Shoe]
//     })
//     // const find = await User.
//     console.log('User Id:', req.user.id)
//     res.json(findOne[0])
//   } catch (error) {
//     next(error)
//   }
// })

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
