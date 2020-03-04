import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getShoesThunk} from '../store/shoes'
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
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {this.props.shoes.shoes.map(shoe => {
            return (
              <Link to={`/shoes/${shoe.id}`} key={shoe.id}>
                <Shoe shoe={shoe} />
              </Link>
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

const mapDispatch = dispatch => {
  return {
    gotShoes: () => dispatch(getShoesThunk())
  }
}

export const allShoes = connect(mapState, mapDispatch)(Shoes)
