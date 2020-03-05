const router = require('express').Router()
module.exports = router

router.use('/checkout', require('./checkout'))
router.use('/shoes', require('./shoes'))
router.use('/cart', require('./cart'))
router.use('/users', require('./users'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
