import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Typography, Button} from '@material-ui/core/'

export const UserDash = props => {
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
        DASHBOARD
      </Typography>
      <div>
        <div className="dashboard">
          <div className="sidebar">
            <div style={{padding: '1em'}}>
              <Typography variant="subtitle2" style={{color: '#242562'}}>
                <b>DASHBOARD</b>
              </Typography>
              <Link
                to="/
          address"
              >
                <Typography variant="subtitle2">
                  <b>ADDRESS</b>
                </Typography>
              </Link>
              <Link to="/account">
                <Typography variant="subtitle2">
                  <b>ACCOUNT</b>
                </Typography>
              </Link>
              <Link to="/orders">
                <Typography variant="subtitle2">
                  <b>ORDERS</b>
                </Typography>
              </Link>
              <Link to="/delete">
                <Typography variant="subtitle2">
                  <b>DELETE ACCOUNT</b>
                </Typography>
              </Link>
              <Link to="/logout">
                <Typography variant="subtitle2">
                  <b>LOGOUT</b>
                </Typography>
              </Link>
            </div>
          </div>
          <div>
            <div id="dashtext">
              <Typography variant="h6">Hey there!</Typography>
              <Typography variant="subtitle2">
                From your account dashboard you have the ability to view your
                account history, and update your account info. Select a link
                below to view or edit information.
              </Typography>
            </div>

            <div id="dashboardForm">
              <Typography variant="button">ACCOUNT INFORMATION</Typography>
              <div id="dashModule">
                <div className="moduleColumn">
                  <div className="dashButton">
                    <Typography variant="caption">
                      DEFAULT SHIPPING ADDRESS
                    </Typography>
                    <Button id="address" variant="contained">
                      <Link to="/address">
                        <p>EDIT</p>
                      </Link>
                    </Button>
                  </div>
                  <br></br>
                  <Typography variant="caption">Address Line One</Typography>
                  <Typography variant="caption">Address Line Two</Typography>
                </div>
                <div
                  className="moduleColumn"
                  style={{marginLeft: '2.127659574468085%'}}
                >
                  <div className="dashButton">
                    <Typography variant="caption">
                      CONTACT INFORMATION
                    </Typography>
                    <Button id="account" variant="contained">
                      <Link to="/account">
                        <p>EDIT</p>
                      </Link>
                    </Button>
                  </div>
                  <br></br>
                  <Typography variant="caption">Username</Typography>
                  <Typography variant="caption">Users Email Address</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserDash)

/**
 * PROP TYPES
 */
UserDash.propTypes = {
  email: PropTypes.string
}
