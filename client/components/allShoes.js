import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getShoesThunk} from '../store/shoes'
import {addToOrderThunk} from '../store/order'
import {addToCartThunk} from '../store/cart'
import {Shoe} from './Shoe'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Paper, Grid, Button} from '@material-ui/core/'

class Shoes extends Component {
  componentDidMount() {
    this.props.gotShoes()
  }
  render() {
    const {user, cart} = this.props.shoes
    const {shoes} = this.props.shoes.shoes
    // console.log('user:', user);
    // console.log('cart:', cart);
    if (shoes.length) {
      return (
        <div>
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              paddingTop: '2%',
              paddingBottom: '2%',
              color: '#fff',
              backgroundColor: '#242562'
            }}
          >
            OUR SHOES
          </Typography>
          <Grid container justify="center">
            {shoes.map(shoe => {
              return (
                <Paper
                  key={shoe.id}
                  style={{width: '33%', paddingBottom: '2.5%'}}
                >
                  <Grid className="shoeFlex">
                    <Link to={`/shoes/${shoe.id}`} className="shoe">
                      <Shoe shoe={shoe} />
                    </Link>
                    <Button
                      className="shoeButton"
                      variant="contained"
                      type="submit"
                      onClick={
                        user.id
                          ? () => this.props.addToOrder(shoe)
                          : () => this.props.addToCart(shoe)
                      }
                    >
                      Add to cart
                    </Button>
                  </Grid>
                </Paper>
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
    shoes: state
  }
}

const mapDispatch = dispatch => ({
  gotShoes: () => dispatch(getShoesThunk()),
  addToCart: item => dispatch(addToCartThunk(item)),
  addToOrder: item => dispatch(addToOrderThunk(item))
})

export const allShoes = connect(mapState, mapDispatch)(Shoes)
