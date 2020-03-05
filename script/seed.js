'use strict'

const db = require('../server/db')
const {User, Shoe, Order} = require('../server/db/models')
const shoes = require('../seedData/shoes')
const users = require('../seedData/users')
const orders = require('../seedData/order')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const createdShoes = await Promise.all(
    shoes.map(shoe => {
      return Shoe.create(shoe)
    })
  )
  const createdUsers = await Promise.all(
    users.map(user => {
      return User.create(user)
    })
  )

  const createdOrders = await Promise.all(
    orders.map(order => {
      return Order.create(order)
    })
  )

  const firstOrder = createdOrders[0]
  const secondOrder = createdOrders[1]
  const thirdOrder = createdOrders[2]

  await firstOrder.addShoes([createdShoes[0], createdShoes[1], createdShoes[2]])
  await secondOrder.addShoes([
    createdShoes[0],
    createdShoes[1],
    createdShoes[2]
  ])
  await thirdOrder.addShoes([createdShoes[5], createdShoes[6], createdShoes[7]])

  console.log(`Seeded ${createdShoes.length} shoes`)
  console.log(`Seeded ${createdUsers.length} users`)
  console.log(`Seeded ${createdOrders.length} orders`)
  console.log(`Seeded successfully!`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.

if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
