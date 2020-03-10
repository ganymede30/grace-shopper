import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import Cart from './components/Cart'
import {
  LoginSignUp,
  Hero,
  allShoes,
  SingleShoe,
  Checkout,
  UserDash
} from './components'
import {getShoesThunk} from './store/shoes'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.gotShoes()
  }

  render() {
    const {isLoggedIn} = this.props
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Hero} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/shoes" component={allShoes} />
        <Route path="/login" component={LoginSignUp} />
        {this.props.shoes.shoes.map(shoe => {
          return (
            <Route
              path={`/shoes/${shoe.id}`}
              component={SingleShoe}
              key={shoe.id}
            />
          )
        })}
        <Route exact path="/cart" component={Cart} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/dashboard" component={UserDash} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={LoginSignUp} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    shoes: state.shoes,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    gotShoes: () => dispatch(getShoesThunk()),
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
