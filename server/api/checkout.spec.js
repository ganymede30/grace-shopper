/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')

describe('Checkout routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/checkout', () => {
    it('POST /api/checkout/create-payment-intent', async () => {
      const res = await request(app)
        .post('/api/checkout/create-payment-intent')
        .send({
          currency: 'USD',
          items: []
        })
        .expect(200)
      expect(res.body.publishableKey).to.be.a('string')
      expect(res.body.clientSecret).to.be.a('string')
    })
  })
})
