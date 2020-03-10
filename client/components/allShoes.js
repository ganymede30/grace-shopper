import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getShoesThunk, getShoesByBrandThunk} from '../store/shoes'
import {addToOrderThunk, addToOrderGuestThunk} from '../store/order'
import {addToCartThunk} from '../store/cart'
import {Shoe} from './Shoe'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Paper, Grid, Button} from '@material-ui/core/'

class Shoes extends Component {
  constructor() {
    super()
    this.state = {
      showMenu: false
    }
    this.showMenu = this.showMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }
  showMenu(event) {
    event.preventDefault()
    this.setState({showMenu: true}, () => {
      document.addEventListener('click', this.closeMenu)
    })
  }
  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({showMenu: false}, () => {
        document.removeEventListener('click', this.closeMenu)
      })
    }
  }

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

          <div>
            <button
              onClick={this.showMenu}
              style={{
                alignContent: 'center',
                paddingTop: '2%',
                paddingBottom: '2%',
                color: '#fff',
                backgroundColor: '#242562'
              }}
            >
              Choose a Brand:
            </button>
            {!this.state.showMenu ? null : (
              <div
                className="menu"
                ref={element => {
                  this.dropdownMenu = element
                }}
              >
                {shoes
                  .reduce((accum, curr) => {
                    if (!accum.includes(curr.brand)) {
                      return [...accum, curr.brand]
                    } else {
                      return accum
                    }
                  }, [])
                  .map(brand => (
                    <button onClick={() => this.props.gotShoesByBrand(brand)}>
                      {brand}
                    </button>
                  ))}
                <button onClick={() => this.props.gotShoes()}>All Shoes</button>
              </div>
            )}
          </div>

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
  gotShoesByBrand: brand => dispatch(getShoesByBrandThunk(brand)),
  addToCart: item => dispatch(addToOrderThunk(item)),
  addToCartGuest: item => dispatch(addToOrderGuestThunk(item))
})

export const allShoes = connect(mapState, mapDispatch)(Shoes)
