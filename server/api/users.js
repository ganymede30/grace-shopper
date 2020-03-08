const router = require('express').Router()
const {User, Order} = require('../db/models')
const {isAdmin} = require('../adminMiddleware')
module.exports = router

// GET all users

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// GET single user
router.get('/:userId', isAdmin, async (req, res, next) => {
  try {
    const id = req.params.userId
    const user = await User.findByPk(id, {
      attributes: ['id', 'email']
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

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
    console.log('User:', req.user)
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
