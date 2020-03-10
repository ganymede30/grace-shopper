import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getShoesThunk, getShoesByBrandThunk} from '../store/shoes'
import {addToOrderThunk} from '../store/order'
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
    const {user, cart} = this.props.shoes
    const {shoes} = this.props.shoes.shoes
    // console.log('user:', user);
    // console.log('cart:', cart);
    console.log(this.props.shoes)
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
                {/* <button onClick={() => this.props.gotShoesByBrand(brand)}>Adidas</button>
                <button onClick={() => this.props.gotShoesByBrand(brand)}>Air Jordan</button>
                <button onClick={() => this.props.gotShoesByBrand(brand)}>Nike</button> */}
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
  gotShoesByBrand: brand => dispatch(getShoesByBrandThunk(brand)),
  addToCart: item => dispatch(addToCartThunk(item)),
  addToOrder: item => dispatch(addToOrderThunk(item))
})

export const allShoes = connect(mapState, mapDispatch)(Shoes)
