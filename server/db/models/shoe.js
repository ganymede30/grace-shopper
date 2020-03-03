const Sequelize = require('sequelize')
const db = require('../db')

const Shoe = db.define('shoe', {
  model: {
    type: Sequelize.STRING
    // allowNull: false,
    // validate: {
    //   notEmpty: true
    // },
  },
  price: {
    type: Sequelize.INTEGER
    // allowNull: false,
    // validate: {
    //   min: 0
    // },
  },
  size: {
    type: Sequelize.INTEGER
    // allowNull: false,
    // validate: {
    //   min: 0
    // },
  },
  gender: {
    type: Sequelize.ENUM('male', 'female', 'unisex')
    // allowNull: false,
    // validate: {
    //   notEmpty: true
    // },
  },
  color: {
    type: Sequelize.STRING
    // allowNull: false,
    // validate: {
    //   notEmpty
    // },
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING
    // allowNull: false,
    // validate: {
    //   notEmpty: true
    // },
  },
  stock: {
    type: Sequelize.INTEGER
    //allowNull: false,
    // validate: {
    //   min: 0
    // },
  }
})

module.exports = Shoe
