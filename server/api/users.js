const router = require('express').Router()
const {User, Order} = require('../db/models')
const {isAdmin} = require('../adminMiddleware')
module.exports = router

// Get all users
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

// Get a single user
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
