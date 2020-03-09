const router = require('express').Router()
const {Shoe} = require('../db/models')
const {isAdmin} = require('../adminMiddleware')

router.get('/', async (req, res, next) => {
  try {
    //parse query parameters
    const shoes = await Shoe.findAll()
    res.json(shoes)
  } catch (error) {
    next(error)
  }
})

router.get('/:shoeId', async (req, res, next) => {
  try {
    const shoeId = req.params.shoeId
    const shoe = await Shoe.findByPk(shoeId)
    res.json(shoe)
  } catch (error) {
    next(error)
  }
})

router.get('/shoeBrand/:brand', async (req, res, next) => {
  try {
    // console.log('server/api/shoes.js Req: ', req.params)
    const brand = req.params.brand
    const shoes = await Shoe.findAll({where: {brand}})
    res.json(shoes)
  } catch (error) {
    next(error)
  }
})

router.post('/', isAdmin, async (req, res, next) => {
  try {
    const shoe = await Shoe.create(req.body)
    res.status(201).send(shoe)
  } catch (error) {
    next(error)
  }
})

module.exports = router
