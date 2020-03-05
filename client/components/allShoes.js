import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getShoesThunk} from '../store/shoes'
import {addToCartDispatcher} from '../store/cart'
import {Shoe} from './Shoe'

class Shoes extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.gotShoes()
  }
  render() {
    if (this.props.shoes.shoes.length) {
      return (
        <div>
          {this.props.shoes.shoes.map(shoe => {
            return (
              <div key={shoe.id}>
                <Link to={`/shoes/${shoe.id}`}>
                  <Shoe shoe={shoe} />
                </Link>
                <button
                  type="submit"
                  onClick={() => this.props.addToCart(shoe)}
                >
                  Add to cart
                </button>
              </div>
            )
          })}
        </div>
      )
    } else {
      return <p>No Shoes</p>
    }
  }
}

const mapState = state => {
  return {
    shoes: state.shoes
  }
}

const mapDispatch = dispatch => ({
  gotShoes: () => dispatch(getShoesThunk()),
  addToCart: item => dispatch(addToCartDispatcher(item))
})

export const allShoes = connect(mapState, mapDispatch)(Shoes)
