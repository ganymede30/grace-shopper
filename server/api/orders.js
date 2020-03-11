/* eslint-disable no-lonely-if */
/* eslint-disable complexity */
const router = require('express').Router()
const {User, Shoe, Order, OrderShoes} = require('../db/models')
const {isAdminOrUser, isAdmin} = require('../adminMiddleware')
module.exports = router

// router.get('/', (req, res, next) => {
//   // find all
//   try {
//     res.json(req.session.cart)
//   } catch (error) {
//     next(error)
//   }
// })

// This is for a logged in user
router.post('/', async (req, res, next) => {
  try {
    let [order, _] = await Order.findOrCreate({
      where: {userId: req.user.id, isCart: true},
      include: {
        model: Shoe
      }
    })
    const shoe = await Shoe.findByPk(req.body.id)
    await order.addShoe(shoe)
    order = await Order.findOne({where: {id: order.id}, include: {model: Shoe}})
    res.json(order.shoes)
  } catch (error) {
    next(error)
  }
})

router.put('/:method/:shoeId', async (req, res, next) => {
  try {
    const {method, shoeId} = req.params
    let orderShoes, order, shoe
    if (req.user !== undefined) {
      shoe = await Shoe.findByPk(shoeId)
      order = await Order.findOne({where: {userId: req.user.id}})
      orderShoes = await OrderShoes.findOne({
        where: {shoeId: shoe.id, orderId: order.id}
      })
    } else {
      shoe = req.session.cart.filter(item => item.id === +shoeId)[0]
    }

    if (method === 'increment') {
      req.user
        ? await orderShoes.update({quantity: orderShoes.quantity + 1})
        : (shoe.OrderShoes.quantity += 1)
    } else if (method === 'decrement') {
      if (req.user !== undefined) {
        if (orderShoes.quantity > 1) {
          await orderShoes.update({quantity: orderShoes.quantity - 1})
        } else {
          await order.removeShoe(shoe)
        }
      } else {
        shoe.OrderShoes.quantity -= 1
      }
    } else if (method === 'remove') {
      if (req.user !== undefined) {
        await order.removeShoe(shoe)
      } else {
        req.session.cart = req.session.cart.filter(item => item.id !== shoe.id)
      }
    }
    return res.json(shoe)
  } catch (error) {
    console.error(error)
  }
})

router.get('/userCart', async (req, res, next) => {
  try {
    if (!req.user) {
      return res.json(req.session.cart)
    }
    console.log(req.session.cart, ': session cart')

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

// when adding an item to cart, what if we pass the eager loaded product, this way we would essentially have the same thing as a normal route, meaning the orderShoes.quantity.

// we can also create a quantity defaulted to 1 in the sessions cart, and use that quantity to manage it. when the users login query everything in the sessions cart into that users id orderShoes.

// maybe try to get orderId into the sessions cart, this way we can match them or match them by item comparison.

// POST to add item to guest cart
router.post('/guest', (req, res, next) => {
  try {
    let shoe = req.body
    if (!shoe.OrderShoes) shoe.OrderShoes = {quantity: 1}
    if (!JSON.stringify(req.session.cart).includes(JSON.stringify(req.body))) {
      req.session.cart = [...req.session.cart, shoe]
    }
    return res.json(shoe)
  } catch (error) {
    next(error)
  }
})

// GET all orders for one user
// router.get('/:id/orders', async (req, res, next) => {
//   try {
//     const userId = req.params.id
//     const theUser = await Order.findAll({ where: { userId }, include: [Shoe] })
//     res.json(theUser)
//   } catch (error) {
//     next(error)
//   }
// })

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
