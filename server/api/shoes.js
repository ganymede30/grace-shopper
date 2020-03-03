const router = require('express').Router()
const {Shoe} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const shoes = await Shoe.findAll()
    res.json(shoes)
  } catch (error) {
    next(error)
  }
})

router.get('/:shoeId', async (req, res, next) => {
  try {
    const shoeId = req.params.shoeId
    const aShoe = await Shoe.findByPk(shoeId)
    res.json(aShoe)
  } catch (error) {
    next(error)
  }
})
