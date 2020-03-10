/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Shoe = db.model('shoe')

describe('Checkout routes', () => {
  beforeEach(async () => {
    await db.sync({force: true})

    const shoe1 = {
      brand: 'Nike',
      price: 500 // $5
    }
    const shoe2 = {
      brand: 'Nike',
      price: 1000 // $10
    }

    await Shoe.create(shoe1)
    await Shoe.create(shoe2)
  })

  describe('/api/checkout', () => {
    it.skip('POST /api/checkout/create-payment-intent', async () => {
      const res = await request(app)
        .post('/api/checkout/create-payment-intent')
        .send({
          items: [
            {id: 1, quantity: 1},
            {id: 2, quantity: 3}
          ]
        })
        .expect(200)
      expect(res.body.publishableKey).to.be.a('string')
      expect(res.body.clientSecret).to.be.a('string')
    })

    it.skip('Requires a quantity', async () => {
      await request(app)
        .post('/api/checkout/create-payment-intent')
        .send({
          items: [{id: 1}, {id: 2}]
        })
        .expect(500)
    })
  })
})
