import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getShoeThunk} from '../store/shoes'

export class SingleShoe extends Component {
  async componentDidMount() {
    await this.props.fetchShoe(this.props.match.params.id)
  }

  render() {
    const {shoe} = this.props
    // console.log(shoe)
    return <div>{console.log(shoe)}</div>
  }
}

const mapState = state => ({
  shoe: state.shoes.shoe
})

const mapDispatch = dispatch => ({
  fetchShoe: id => dispatch(getShoeThunk(id))
})

export default connect(mapState, mapDispatch)(SingleShoe)
