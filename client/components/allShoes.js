import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getShoesThunk} from '../store/shoes'
import {addToOrderThunk, addToOrderGuestThunk} from '../store/order'
import {Shoe} from './Shoe'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Paper, Grid, Button} from '@material-ui/core/'

class Shoes extends Component {
  componentDidMount() {
    this.props.gotShoes()
  }
  render() {
    const {user, shoes} = this.props

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
                      style={{marginLeft: '0 auto', marginRight: '0 auto'}}
                      variant="contained"
                      type="submit"
                      onClick={
                        user.id
                          ? () => this.props.addToCart(shoe)
                          : () => this.props.addToCartGuest(shoe)
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
    shoes: state.shoes.shoes,
    user: state.user
  }
}

const mapDispatch = dispatch => ({
  gotShoes: () => dispatch(getShoesThunk()),
  addToCart: item => dispatch(addToOrderThunk(item)),
  addToCartGuest: item => dispatch(addToOrderGuestThunk(item))
})

export const allShoes = connect(mapState, mapDispatch)(Shoes)
