const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
  // find all
  try {
    res.json(req.session.cart)
  } catch (error) {
    next(error)
  }
})

router.post('/', (req, res, next) => {
  try {
    req.session.cart.items = [...req.session.cart.items, req.body]
    console.log(req.session.cart, 'SESH')
    res.json(req.session.cart)
  } catch (error) {
    next(error)
  }
})
// get request to fetch on the first time
