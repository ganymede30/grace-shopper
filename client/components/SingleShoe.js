import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getShoeThunk} from '../store/shoes'
import {addToOrderThunk, addToOrderGuestThunk} from '../store/order'
import {Shoe} from './Shoe'
import {Button} from '@material-ui/core/'

export class SingleShoe extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    const id = this.props.match.path.split('/')[2]
    await this.props.fetchShoe(id)
  }
  render() {
    const {user, shoe} = this.props

    return (
      <div>
        <Shoe shoe={this.props.shoe} />
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
      </div>
    )
  }
}

const mapState = state => ({
  shoe: state.shoes.shoe,
  user: state.user
})

const mapDispatch = dispatch => ({
  fetchShoe: id => dispatch(getShoeThunk(id)),
  addToCart: item => dispatch(addToOrderThunk(item)),
  addToCartGuest: item => dispatch(addToOrderGuestThunk(item))
})

export default connect(mapState, mapDispatch)(SingleShoe)
