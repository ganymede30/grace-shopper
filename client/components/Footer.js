import React from 'react'
import {Typography} from '@material-ui/core'
import {Facebook, Twitter, Instagram, Email} from '@material-ui/icons'

export default function Footer() {
  return (
    <div id="footerFlex">
      <div id="footerLogo">
        <img src="shoelala.png"></img>
      </div>
      <div id="footer">
        <div id="firstChild">
          <Typography variant="subtitle2">CUSTOMER SERVICE</Typography>
          <Typography variant="caption">Track Your Order</Typography>
          <Typography variant="caption">Terms of Use</Typography>
          <Typography variant="caption">Privacy Policy</Typography>
        </div>

        <div id="secondChild">
          <Typography variant="subtitle2">FIND US</Typography>
          <Typography variant="caption">5 Hanover Square</Typography>
          <Typography variant="caption">New York, NY 1004</Typography>
        </div>

        <div id="thirdChild">
          <Facebook />
          <Twitter />
          <Instagram />
          <Email />
        </div>
      </div>
    </div>
  )
}
