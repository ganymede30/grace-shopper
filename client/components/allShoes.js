import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getShoesThunk} from '../store/shoes'
import {addToCartThunk} from '../store/cart'
import Grid from '@material-ui/core/Grid'
import {Shoe} from './Shoe'

class Shoes extends Component {
  componentDidMount() {
    this.props.gotShoes()
  }
  render() {
    if (this.props.shoes.shoes.length) {
      return (
        <div style={{flexGrow: 2}}>
          <Grid container spacing={1}>
            {this.props.shoes.shoes.map(shoe => {
              return (
                <Grid item xs key={shoe.id}>
                  <div>
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
                </Grid>
              )
            })}
          </Grid>
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
  addToCart: item => dispatch(addToCartThunk(item))
})

export const allShoes = connect(mapState, mapDispatch)(Shoes)
