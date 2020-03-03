/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Shoe = db.model('shoe')

describe('Shoe routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/shoes/', () => {
    const shoeId = 1
    const shoeBrand = 'Nike'
    const shoeModel = 'Air Force 1'
    const shoePrice = 1
    const shoeImageUrl =
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'

    beforeEach(() => {
      return Shoe.create({
        // add all required fields.
        id: shoeId,
        model: shoeModel,
        price: shoePrice,
        brand: shoeBrand,
        imageUrl: shoeImageUrl
      })
    })

    it('GET /api/shoes', async () => {
      const res = await request(app)
        .get('/api/shoes')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].model).to.be.equal(shoeModel)
    })

    it('GET /api/shoes/:shoeId', async () => {
      const res = await request(app)
        .get('/api/shoes/1')
        .expect(200)
      expect(res.body.id).to.equal(shoeId)
    })
  }) // end describe('/api/shoes')
}) // end describe('Shoe routes')
