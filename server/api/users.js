const router = require('express').Router()
const {User, Order} = require('../db/models')
module.exports = router

// GET all users
router.get('/', async (req, res, next) => {
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
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
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
    res.json(findOne)
  } catch (error) {
    next(error)
  }
})

// router.post('/', async (req, res, next) => {
//   try {
//     // create a new order and assign its userId;
//     const newOrder = await Order.create(req.body);

//   } catch (error) {
//     next(error)
//   }
// })
