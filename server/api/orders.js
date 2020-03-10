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
    const shoe = await Shoe.findByPk(shoeId)
    const order = await Order.findOne({where: {userId: req.user.id}})
    const orderShoes = await OrderShoes.findOne({
      where: {shoeId: shoe.id, orderId: order.id}
    })
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
      return res.json(req.session.cart)
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

// when adding an item to cart, what if we pass the eager loaded product, this way we would essentially have the same thing as a normal route, meaning the orderShoes.quantity.

// we can also create a quantity defaulted to 1 in the sessions cart, and use that quantity to manage it. when the users login query everything in the sessions cart into that users id orderShoes.

// maybe try to get orderId into the sessions cart, this way we can match them or match them by item comparison.

// POST to add item to guest cart
router.post('/guest', async (req, res, next) => {
  try {
    const order = await Order.create({where: {isCart: true}})
    const shoe = await Shoe.findByPk(req.body.id)
    order.addShoe(shoe)
    if (!JSON.stringify(req.session.cart).includes(JSON.stringify(req.body)))
      req.session.cart = [...req.session.cart, req.body]
    return res.json(req.session.cart)
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
