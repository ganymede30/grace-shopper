import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getShoesThunk} from '../store/shoes'
import {addToOrderThunk, addToOrderGuestThunk} from '../store/order'
import {Shoe} from './Shoe'
import {Typography, Paper, Grid, Button} from '@material-ui/core/'


export class Shoes extends Component {
  async componentDidMount() {
    await this.props.gotShoes()
  }
  render() {
    const {user, shoes} = this.props
    function shuffle(arr) {
      let currIdx = arr.length,
        randomIdx
      let result = []
      while (0 !== currIdx && result.length < 4) {
        randomIdx = Math.floor(Math.random() * currIdx)
        currIdx -= 1
        result.push(arr[randomIdx])
      }
      return result
    }
    const featured = shuffle(shoes)
    if (featured.length) {
      return (
        <div>
          <Typography
            variant="subtitle1"
            style={{
              textAlign: 'center',
              marginTop: '4em',
              paddingTop: '1em',
              paddingBottom: '1.5em',
              color: '#242562'
            }}
          >
            FEATURED SHOES
          </Typography>
          <Grid contained id="featured">
            {featured.map(shoe => {
              return (
                <Paper
                  key={shoe.id}
                  style={{width: '25%', paddingBottom: '2.5%'}}
                >
                  <Grid className="shoeFlex">
                    <Link to={`/shoes/${shoe.id}`} className="shoe">
                      <Shoe shoe={shoe} />
                    </Link>
                  </Grid>
                </Paper>
              )
            })}
          </Grid>
        </div>
      )
    } else {
      return <p>No featured shoes</p>
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
  addToCartGuest: item => dispatch(addToOrderGuestThunk(item)),
  addToOrder: item => dispatch(addToOrderThunk(item))
})

export const FeaturedShoes = connect(mapState, mapDispatch)(Shoes)
