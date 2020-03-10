/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {UserDash} from './user-dashboard'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('UserHDash', () => {
  let userDash

  beforeEach(() => {
    userDash = shallow(<UserDash email="cody@email.com" />)
  })

  it('renders the email in an h3', () => {
    expect(userDash.find('h3').text()).to.be.equal('Welcome, cody@email.com')
  })
})
