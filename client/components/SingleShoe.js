import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getShoeThunk} from '../store/shoes'
import {Shoe} from './Shoe'

export class SingleShoe extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    const id = this.props.match.path.split('/')[2]
    await this.props.fetchShoe(id)
  }
  render() {
    return <Shoe shoe={this.props.shoe} />
  }
}

const mapState = state => ({
  shoe: state.shoes.shoe
})

const mapDispatch = dispatch => ({
  fetchShoe: id => dispatch(getShoeThunk(id))
})

export default connect(mapState, mapDispatch)(SingleShoe)
