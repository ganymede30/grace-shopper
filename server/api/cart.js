const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
  try {
    res.json(req.session.cart)
  } catch (error) {
    next(error)
  }
})

router.post('/', (req, res, next) => {
  try {
    if (
      !JSON.stringify(req.session.cart.items).includes(JSON.stringify(req.body))
    )
      req.session.cart.items = [...req.session.cart.items, req.body]
    console.log(req.session.cart, 'SESH')
    res.json(req.session.cart)
  } catch (error) {
    next(error)
  }
})
// get request to fetch on the first time
