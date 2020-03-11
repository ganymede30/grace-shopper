import React from 'react'
import {Navbar, Footer} from './components'
import Routes from './routes'

const App = props => {
  return (
    <div>
      <div id="content">
        <Navbar />
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default App
